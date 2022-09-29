<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "../config/axios";
import TableComponent from "../components/TableComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";

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

const createHotel = () => {
  router.push({ name: "CreateHotel" });
};
</script>
<template>
  <h1>Hotel</h1>
  <ButtonComponent
    @click="createHotel"
    :class="'btn btn-success'"
    :label="'Crear hotel'"
  />
  <TableComponent :data="hoteles" :actions="actions" />
</template>
