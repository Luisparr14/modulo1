<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "../config/axios";
import TableComponent from "../components/TableComponent.vue";
import IndicatorPageComponent from "../components/IndicatorPageComponent.vue";
import HotelSVG from "../assets/icons/HotelIcon.vue";
import HomeLayout from "../layouts/HomeLayout.vue";

const router = useRouter();

const hoteles = ref([]);

const actions = [
  {
    label: "Detalle",
    class: "btn btn-warning btn-sm px-3 d-flex m-auto",
    action: (hotel) => {
      router.push({ name: "HotelDetail", params: { id: hotel?.id } });
    },
  },
  {
    label: "Habitaciones",
    class: "btn btn-success btn-sm px-3 d-flex m-auto",
    action: (hotel) => {
      router.push({ name: "HotelRooms", params: { id: hotel?.id } });
    },
  },
];
onMounted(async () => {
  const { data } = await axios.get("/hotels");
  hoteles.value = data.data;
});
</script>
<template>
  <HomeLayout>
    <IndicatorPageComponent :currentPage="'Hoteles'" :label="'Crear Hotel'" >
      <template #svgIcon>
        <HotelSVG />
      </template>
    </IndicatorPageComponent>
    <TableComponent :data="hoteles" :actions="actions" />
  </HomeLayout>
</template>
