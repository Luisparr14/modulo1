<script setup>
import { inject, onMounted, ref } from "vue";
import BreadCrumbComponent from "../components/BreadCrumbComponent.vue";
import TableComponent from "../components/TableComponent.vue";
import { getRooms, deleteRoom } from "../services/rooms";
import { useRouter } from "vue-router";
import IndicatorPageComponent from "../components/IndicatorPageComponent.vue";
import RoomIconVue from "../assets/icons/RoomIcon.vue";
import HomeLayout from "../layouts/HomeLayout.vue";

const router = useRouter();
const { id } = router.currentRoute.value.params;
const rooms = ref([]);
const swal = inject("$swal");

const getDataRooms = async () => {
  const { data } = await getRooms(id);
  rooms.value = data;
};

onMounted(async () => {
  await getDataRooms();
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
    action: (room) => handleDelete(room?.id),
  },
];

const handleDelete = async (idRoom) => {
  try {
    const { isConfirmed, isDismissed } = await swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (isConfirmed) {
      await deleteRoom(idRoom);
      await getDataRooms();
      swal.fire("Eliminado", "La habitación ha sido eliminada", "success");
    }

    if (isDismissed) {
      swal.fire("Cancelado", "Conservaremos la habitación", "info");
    }
  } catch (error) {
    swal.fire("¡Oops!", "Algo salió mal", "error");
  }
};

const goToCreateRoom = () => {
  router.push({ name: "CreateRoom", query: { hotelId: id } });
};
</script>
<template>
  <HomeLayout>
    <BreadCrumbComponent />
    <IndicatorPageComponent
      :currentPage="'Habitaciones'"
      :label="'Crear Habitación'"
      :buttonAction="goToCreateRoom"
    >
      <template #svgIcon>
        <RoomIconVue />
      </template>
    </IndicatorPageComponent>
    <TableComponent :columns="columns" :data="rooms" :actions="actions" />
  </HomeLayout>
</template>
