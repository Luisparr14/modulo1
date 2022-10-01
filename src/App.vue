<script setup>
import { RouterView } from "vue-router";
import NavSideComponent from "./components/NavSideComponent.vue";
</script>

<template>
  <div
    class="wrapper sidebar-mini sidebar-closed sidebar-collapse control-sidebar-slide-open sidebar-mini-xs layout-fixed overflow-hidden"
  >
    <NavSideComponent />
    <div class="content-wrapper">
      <RouterView />
    </div>
  </div>
</template>
