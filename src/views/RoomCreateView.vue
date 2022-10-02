<script setup>
import HomeLayout from "../layouts/HomeLayout.vue";
import IndicatorPageComponent from "../components/IndicatorPageComponent.vue";
import HotelIconVue from "../assets/icons/HotelIcon.vue";
import BreadCrumbComponent from "../components/BreadCrumbComponent.vue";
import FormComponent from "../components/FormComponent.vue";
import { onMounted, ref, computed, reactive, inject } from "vue";
import { useRouter } from "vue-router";
import { createRoom, getRoomTypes } from "../services/rooms";
import { getAccommodationsTypes } from "../services/accommodation";

const router = useRouter();
const fields = ref([]);
const state = reactive({});
const swal = inject("$swal");
const currentPage = computed(() => {
  return state?.infoRoom?.hotel?.name;
});

onMounted(async () => {
  const accommodationsTypes = await getAccommodationsTypes();
  const roomTypes = await getRoomTypes();
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
    },
    {
      label: "Cantidad",
      type: "number",
      name: "quantity",
      id: "quantity",
    },
  ];
});

// Quedamos aquí
const onSubmit = async (form) => {
  try {
    const { hotelId } = router.currentRoute.value.query;
    form = {
      ...form,
      hotel_id: parseInt(hotelId),
    };
    const { message, success } = await createRoom(form);
    if (success) {
      swal.fire({
        title: "¡Genial!",
        text: message,
        icon: "success",
      });
      router.push(`/hoteles/habitaciones/${hotelId}`);
    }
  } catch (error) {
    const { errors } = error.response.data;
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: errors.simple,
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
    </IndicatorPageComponent>
    <FormComponent
      :fields="fields"
      :onSubmit="onSubmit"
      :button-text="'Crear habitación'"
    />
  </HomeLayout>
</template>
