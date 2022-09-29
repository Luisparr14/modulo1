<script setup>
import { onMounted, ref } from "vue";
import BreadCrumbComponent from "../components/BreadCrumbComponent.vue";
import TableComponent from "../components/TableComponent.vue";
import axios from "../config/axios";
import { useRouter } from "vue-router";
import ButtonComponent from "../components/ButtonComponent.vue";

const router = useRouter();
const rooms = ref([]);

const { id } = router.currentRoute.value.params;

onMounted(async () => {
  const { data } = await axios.get(`/rooms/${id}`);
  rooms.value = data.data;
});

const columns = [
  {
    label: "Tipo",
    field: "type",
  },
  {
    label: "Acomodación",
    field: "accommodation",
  },
  {
    label: "Cantidad",
    field: "quantity",
  },
];

const actions = [
  {
    label: "Editar",
    class: "btn btn-warning btn-sm px-3 d-flex m-auto",
    action: (room) => {
      router.push({ name: "RoomDetail", params: { id: room?.id } });
    },
  },
  {
    label: "Eliminar",
    class: "btn btn-danger btn-sm px-3 d-flex m-auto",
    action: (room) => {
      alert(`Eliminar ${room?.id}`);
    },
  },
];

const createRoom = () => {
  router.push({ name: "CreateRoom", params: { id } });
};
</script>
<template>
  <h1>Habitaciónes</h1>
  <BreadCrumbComponent />
  <ButtonComponent
    @click="createRoom"
    :class="'btn btn-success'"
    :label="'Crear habitación'"
  />
  <TableComponent :columns="columns" :data="rooms" :actions="actions" />
</template>
