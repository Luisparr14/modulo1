<script setup>
import { computed, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { getRoom } from "../services/rooms";

const router = useRouter();
const state = reactive({
  infoRoom: {},
});
const { meta } = router.currentRoute.value;

const breadcrumbs = computed(() => {
  return meta?.breadcrumb?.split("-");
});

const breadCrumbName = computed(() => {
  return meta?.breadcrumbName.split("-");
});

const navigate = (path) => {
  router.push({
    name: path,
    params: {
      id: state?.infoRoom?.hotel_id,
    },
  });
};

onMounted(async () => {
  const { id } = router.currentRoute.value.params;
  if (id) {
    const { data: info } = await getRoom(id);
    state.infoRoom = info;
  }
});
</script>
<template>
  <nav aria-label="breadcrumb" v-if="breadcrumbs">
    <ol class="breadcrumb d-flex align-items-center">
      <i class="fas fa-home mx-1"></i>
      <li
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
        class="breadcrumb-item"
      >
        <i class="fas fa-chevron-right mx-1"></i>
        <span
          v-if="index === breadcrumbs.length - 1"
          class="pointer text-decoration-none text-primary fw-bold"
          aria-current="page"
          >{{ breadcrumb }}</span
        >
        <a
          v-else
          href="#"
          @click.prevent="navigate(breadCrumbName[index])"
          class="pointer text-decoration-none text-dark"
        >
          {{ breadcrumb }}</a
        >
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb-item+.breadcrumb-item::before {
  float: left;
  padding-right: 0.5rem;;
  content: "";
}
</style>
