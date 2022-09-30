<script setup>
import HomeLayout from "../layouts/HomeLayout.vue";
import IndicatorPageComponent from "../components/IndicatorPageComponent.vue";
import HotelIconVue from "../assets/icons/HotelIcon.vue";
import BreadCrumbComponent from "../components/BreadCrumbComponent.vue";
import FormComponent from "../components/FormComponent.vue";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { getHotel } from "../services/hotels";
import { getCities } from "../services/cities";

const router = useRouter();
const { id } = router.currentRoute.value.params;
const fields = ref([]);
const state = reactive({});

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
      name: "city",
      id: hotelData.city.id,
      value: hotelData.city.id,
    },
  ];
  fields.value[4].options = citiesData.map((city) => ({
    value: city.id,
    label: city.name,
  }));
});

const onSubmit = async (form) => {
  console.log("Submit", form);
};

const deleteHotel = async () => {
  alert(`Hotel ${state.infoHotel.name} listo para ser eliminado`);
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
      :onSubmit="onSubmit"
      :button-text="'Actualizar Datos'"
      :more-than-one-button="true"
    >
      <template #aditionalButton>
        <button type="button" @click="deleteHotel" class="btn btn-danger mb-3">
          Eliminar hotel
        </button>
      </template>
    </FormComponent>
  </HomeLayout>
</template>
