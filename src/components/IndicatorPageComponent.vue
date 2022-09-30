<script setup>
import ButtonComponent from "./ButtonComponent.vue";

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
  svgIcon: {
    type: String,
    default: "icon",
  },
  buttonAction: {
    type: Function,
    default: () => {
      console.log("Default action");
    },
  },
  withButton: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <section :class="classProp" class="my-4">
    <div class="d-flex flex-row align-items-center indicator">
      <div>
        <slot name="svgIcon"></slot>
      </div>
      <div>
        <h1 class="mx-2 my-0">{{ currentPage }}</h1>
        <slot name="info"></slot>
      </div>
    </div>
    <ButtonComponent
      v-if="withButton"
      :class="buttonClass"
      @click="buttonAction"
      :label="label"
    />
    <slot id="infoPage"></slot>
  </section>
</template>

<style scoped>
button {
  height: 40px;
}
</style>
