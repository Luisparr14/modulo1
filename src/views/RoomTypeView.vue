<script setup>
import { onMounted, reactive } from "vue";
import HomeLayout from "../layouts/HomeLayout.vue";
import TableComponent from "../components/TableComponent.vue";
import { getRoomTypes } from "../services/rooms";
import IndicatorPageComponent from "../components/IndicatorPageComponent.vue";
import RoomTypeIcon from "../assets/icons/RoomTypeIcon.vue";

const columns = [
  {
    label: "ID",
    field: "id",
  },
  {
    label: "Nombre",
    field: "name",
  },
];
const state = reactive({
  accommodationsTypes: [],
});
onMounted(async () => {
  const data = await getRoomTypes();
  state.accommodationsTypes = data;
});
</script>
<template>
  <HomeLayout>
    <IndicatorPageComponent
      :with-button="false"
      current-page="Tipos de habitación"
    >
      <template #svgIcon>
        <RoomTypeIcon />
      </template>
    </IndicatorPageComponent>
    <TableComponent
      :with-actions="false"
      :columns="columns"
      :data="state.accommodationsTypes"
    />
  </HomeLayout>
</template>
