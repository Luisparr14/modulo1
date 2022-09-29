<script setup>
import BreadCrumbComponent from "../components/BreadCrumbComponent.vue";
import IndicatorPageComponent from "../components/IndicatorPageComponent.vue";
import HotelIconVue from "../assets/icons/HotelIcon.vue";
import HomeLayout from "../layouts/HomeLayout.vue";
</script>
<template>
  <HomeLayout>
    <BreadCrumbComponent />
    <IndicatorPageComponent :with-button="false" :currentPage="'Hotel'">
      <template #svgIcon>
        <HotelIconVue :width="'35'" />
      </template>
    </IndicatorPageComponent>
  </HomeLayout>
</template>
