<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const items = ref([
  { title: "Inicio", path: "/" },
  { title: "Hoteles", path: "/hoteles" },
  { title: "Tipos de habitaciones", path: "/tipo-habitaciones" },
  { title: "Acomodaciones", path: "/acomodaciones" },
]);
</script>
<template>
  <nav class="navbar h-25 navbar-expand-md bg-light">
    <div class="px-4 container-fluid">
      <figure>
        <img src="../assets/images/logo.png" alt="Logo" />
      </figure>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="item in items" :key="item.title" class="nav-item">
            <router-link
              class="nav-link mx-3 fw-bold"
              :class="route.path === item.path ? 'text-success' : ''"
              :to="item.path"
              >{{ item.title }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
figure {
  width: 150px;
  height: 50px;
}
img {
  width: 100%;
  height: 100%;
}
</style>
