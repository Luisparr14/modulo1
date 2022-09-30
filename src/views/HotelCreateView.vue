<script setup>
import HomeLayout from "../layouts/HomeLayout.vue";
import IndicatorPageComponent from "../components/IndicatorPageComponent.vue";
import HotelIconVue from "../assets/icons/HotelIcon.vue";
import BreadCrumbComponent from "../components/BreadCrumbComponent.vue";
import FormComponent from "../components/FormComponent.vue";

const onSubmit = async (form) => {
  console.log(form);
};
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
    <FormComponent :onSubmit="onSubmit" />
  </HomeLayout>
</template>
