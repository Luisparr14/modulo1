<script setup>
import ButtonComponent from "./ButtonComponent.vue";
import { useRouter } from "vue-router";

defineProps({
  classProp: {
    type: String,
    default: "d-flex justify-content-between flex-wrap align-items-center",
  },
  buttonClass: {
    type: String,
    default: "btn btn-primary",
  },
  currentPage: {
    type: String,
    default: "Current Page",
  },
  label: {
    type: String,
    default: "Indicator label",
  },
});

const router = useRouter();
const createHotel = () => {
  router.push({ name: "CreateHotel" });
};
</script>
<template>
  <section :class="classProp" class="my-4">
    <h1>{{ currentPage }}</h1>
    <ButtonComponent @click="createHotel" :class="buttonClass" :label="label" />
    <slot id="infoPage"></slot>
  </section>
</template>

<style scoped>
button {
  height: 40px;
}
</style>
