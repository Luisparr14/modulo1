<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>
<template>
  <section class="px-1 px-sm-5">
    <HeaderComponent />
    <slot></slot>
  </section>
</template>
