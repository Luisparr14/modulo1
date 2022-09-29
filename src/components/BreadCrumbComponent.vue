<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const { meta } = router.currentRoute.value;

const breadcrumbs = computed(() => {
  return meta?.breadcrumb?.split("-");
});

const navigate = (path) => {
  router.push({
    name: path,
  });
};
</script>
<template>
  <nav
    style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);"
    aria-label="breadcrumb"
    v-if="breadcrumbs"
  >
    <ol class="breadcrumb">
      <li
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
        class="breadcrumb-item"
      >
        <span
          v-if="index === breadcrumbs.length - 1"
          class="active"
          aria-current="page"
          >{{ breadcrumb }}</span
        >
        <a
          v-else
          href="#"
          @click.prevent="navigate(breadcrumb)"
          >{{ breadcrumb }}</a
        >
      </li>
    </ol>
  </nav>
</template>
