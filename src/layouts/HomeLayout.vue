<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
</script>
<template>
  <section class="px-2">
    <HeaderComponent />
    <slot></slot>
  </section>
</template>
