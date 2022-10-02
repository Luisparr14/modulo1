<script setup>
import HomeLayout from "@/layouts/HomeLayout.vue";
import IndicatorPageComponent from "@/components/IndicatorPageComponent.vue";
import HotelIconVue from "@/assets/icons/HotelIcon.vue";
import BreadCrumbComponent from "@/components/BreadCrumbComponent.vue";
import FormComponent from "@/components/FormComponent.vue";
import { inject, onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { getHotel, deleteHotel, updateHotel } from "@/services/hotels";
import { getCities } from "@/services/cities";

const router = useRouter();
const { id } = router.currentRoute.value.params;
const fields = ref([]);
const state = reactive({});
const swal = inject("$swal");

onMounted(async () => {
  const { data: hotelData } = await getHotel(id);
  const citiesData = await getCities();
  state.infoHotel = hotelData;
  fields.value = [
    {
      label: "Nombre",
      type: "text",
      name: "name",
      id: "name",
      value: hotelData.name,
    },
    {
      label: "NIT",
      type: "text",
      name: "nit",
      id: "nit",
      value: hotelData.nit,
    },
    {
      label: "Dirección",
      type: "text",
      name: "address",
      id: "address",
      value: hotelData.address,
    },
    {
      label: "Numero de habitaciones",
      type: "number",
      name: "num_rooms",
      id: "num_rooms",
      value: hotelData.num_rooms,
    },
    {
      label: "Ciudad",
      type: "select",
      options: [],
      name: "city_id",
      id: hotelData.city.id,
      value: hotelData.city.id,
    },
  ];
  fields.value[4].options = citiesData.map((city) => ({
    value: city.id,
    label: city.name,
  }));
});

const handleUpdateHotel = async (form) => {
  try {
    const { success, message } = await updateHotel(id, form);
    if (success) {
      swal
        .fire({
          title: "¡Genial!",
          text: message,
          icon: "success",
          confirmButtonText: "Aceptar",
        })
        .then(() => {
          router.push("/hoteles");
        });
    }
  } catch (error) {
    swal.fire({
      title: "¡Error!",
      text: "Ha ocurrido un error inesperado",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }
};

const handleDeleteHotel = async () => {
  const { success, message } = await deleteHotel(id);
  if (success) {
    swal
      .fire({
        title: "¡Genial!",
        text: message,
        icon: "success",
        confirmButtonText: "Aceptar",
      })
      .then(() => {
        router.push("/hoteles");
      });
  } else {
    swal.fire({
      title: "¡Error!",
      text: message,
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  }
};
</script>
<template>
  <HomeLayout>
    <BreadCrumbComponent />
    <IndicatorPageComponent :currentPage="'Hotel'" :with-button="false">
      <template #svgIcon>
        <HotelIconVue />
      </template>
    </IndicatorPageComponent>
    <FormComponent
      :fields="fields"
      :onSubmit="handleUpdateHotel"
      :button-text="'Actualizar Datos'"
      :more-than-one-button="true"
    >
      <template #aditionalButton>
        <button
          type="button"
          @click="handleDeleteHotel"
          class="btn btn-danger mb-3"
        >
          Eliminar hotel
        </button>
      </template>
    </FormComponent>
  </HomeLayout>
</template>
