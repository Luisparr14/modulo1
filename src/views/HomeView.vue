<script setup>
import BreadCrumbComponent from "@/components/BreadCrumbComponent.vue";
import HomeLayout from "@/layouts/HomeLayout.vue";
import GalleryComponent from "../components/GalleryComponent.vue";
import IndicatorPageComponent from "../components/IndicatorPageComponent.vue";
</script>

<template>
  <HomeLayout>
    <BreadCrumbComponent />
    <IndicatorPageComponent current-page="Inicio" :with-button="false"/>
    <GalleryComponent />
  </HomeLayout>
</template>
