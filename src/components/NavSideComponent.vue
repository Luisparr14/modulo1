<script setup>
import items from "../models/routes.js";
</script>
<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link to="/" class="brand-link">
      <img
        src="@/assets/images/logo.png"
        alt="Logo"
        class="img-circle elevation-2"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">Decameron</span>
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li v-for="item in items" :key="item.id" class="nav-item">
            <router-link :to="item.path" class="nav-link">
              <i class="nav-icon" :class="item.icon"></i>
              <p>
                {{ item.name }}
              </p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>
<style scoped>
img {
  max-width: 60px;
  margin-right: 10px;
}
.main-sidebar:hover img {
  max-width: 120px;
}
</style>
