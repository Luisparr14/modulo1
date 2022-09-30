<script setup>
import HomeLayout from "../layouts/HomeLayout.vue";
import IndicatorPageComponent from "../components/IndicatorPageComponent.vue";
import HotelIconVue from "../assets/icons/HotelIcon.vue";
import BreadCrumbComponent from "../components/BreadCrumbComponent.vue";
import FormComponent from "../components/FormComponent.vue";
import { onMounted, ref } from "vue";
import { getCities } from "../services/cities";
const cities = ref([]);
const fields = ref([
  {
    label: "Nombre",
    type: "text",
    name: "name",
    id: "name",
    placeholder: "Nombre del hotel",
  },
  {
    label: "NIT",
    type: "text",
    name: "nit",
    id: "nit",
    placeholder: "NIT del hotel",
  },
  {
    label: "Dirección",
    type: "text",
    name: "address",
    id: "address",
    placeholder: "Dirección del hotel",
  },
  {
    label: "Numero de habitaciones",
    type: "number",
    name: "num_rooms",
    id: "num_rooms",
    placeholder: "Numero de habitaciones",
  },
  {
    label: "Ciudad",
    type: "select",
    options: [],
    name: "city",
    id: "city",
    placeholder: "Ciudad del hotel",
  },
]);

const onSubmit = async (form) => {
  console.log(form);
};
onMounted(async () => {
  cities.value = await getCities();
  fields.value[4].options = cities.value.map((city) => ({
    value: city.id,
    label: city.name,
  }));
});
</script>
<template>
  <HomeLayout>
    <BreadCrumbComponent />
    <IndicatorPageComponent
      :currentPage="'Crear nuevo hotel'"
      :with-button="false"
    >
      <template #svgIcon>
        <HotelIconVue />
      </template>
    </IndicatorPageComponent>
    <FormComponent :onSubmit="onSubmit" :fields="fields" />
  </HomeLayout>
</template>
