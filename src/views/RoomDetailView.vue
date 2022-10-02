<script setup>
import HomeLayout from "@/layouts/HomeLayout.vue";
import IndicatorPageComponent from "@/components/IndicatorPageComponent.vue";
import HotelIconVue from "@/assets/icons/HotelIcon.vue";
import BreadCrumbComponent from "@/components/BreadCrumbComponent.vue";
import FormComponent from "@/components/FormComponent.vue";
import { onMounted, ref, computed, reactive, inject } from "vue";
import { useRouter } from "vue-router";
import { getRoom, getRoomTypes, updateRoom } from "@/services/rooms";
import { getAccommodationsTypes } from "@/services/accommodation";

const router = useRouter();
const { id } = router.currentRoute.value.params;
const fields = ref([]);
const state = reactive({});
const swal = inject("$swal");
const currentPage = computed(() => {
  return state?.infoRoom?.hotel?.name;
});

onMounted(async () => {
  const { data: info } = await getRoom(id);
  const accommodationsTypes = await getAccommodationsTypes();
  const roomTypes = await getRoomTypes();
  state.infoRoom = info;
  fields.value = [
    {
      label: "Tipo de habitación",
      type: "select",
      options: roomTypes.map((roomType) => ({
        value: roomType.id,
        label: roomType.name,
      })),
      name: "room_type_id",
      id: "type",
      value: state.infoRoom.type.id,
    },
    {
      label: "Acomodación",
      type: "select",
      options: accommodationsTypes.map((item) => ({
        value: item.id,
        label: item.name,
      })),
      name: "accommodation_id",
      id: "accommodation",
      value: state.infoRoom.accommodation.id,
    },
    {
      label: "Cantidad",
      type: "number",
      name: "quantity",
      id: "quantity",
      value: state.infoRoom.quantity,
    },
  ];
});

const onSubmit = async (form) => {
  const { id: hotelId } = state.infoRoom.hotel;
  form = {
    ...form,
    hotel_id: hotelId,
  };
  try {
    const { message } = await updateRoom(id, form);
    await swal.fire({
      icon: "success",
      title: message,
    });
    router.push(`/hoteles/habitaciones/${hotelId}`);
  } catch (error) {
    const { message } = error.response.data;
    swal.fire({
      icon: "error",
      title: message,
    });
  }
};
</script>
<template>
  <HomeLayout>
    <BreadCrumbComponent />
    <IndicatorPageComponent :currentPage="currentPage" :with-button="false">
      <template #svgIcon>
        <HotelIconVue />
      </template>
      <template #info>
        <small class="px-2 fs-6">
          <span class="fw-normal">Numero de habitaciones: </span>
          {{ state?.infoRoom?.quantity }}
        </small>
      </template>
    </IndicatorPageComponent>
    <FormComponent
      :fields="fields"
      :onSubmit="onSubmit"
      :button-text="'Actualizar Datos'"
    />
  </HomeLayout>
</template>
