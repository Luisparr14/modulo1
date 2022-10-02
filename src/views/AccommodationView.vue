<script setup>
import { onMounted, reactive } from "vue";
import HomeLayout from "@/layouts/HomeLayout.vue";
import TableComponent from "@/components/TableComponent.vue";
import { getAccommodationsTypes } from "@/services/accommodation";
import IndicatorPageComponent from "@/components/IndicatorPageComponent.vue";
import AlojamientoIcon from "@/assets/icons/AlojamientoIcon.vue";

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
  const data = await getAccommodationsTypes();
  state.accommodationsTypes = data;
});
</script>
<template>
  <HomeLayout>
    <IndicatorPageComponent :with-button="false" current-page="Acomodaciones">
      <template #svgIcon>
        <AlojamientoIcon />
      </template>
    </IndicatorPageComponent>
    <TableComponent
      :with-actions="false"
      :columns="columns"
      :data="state.accommodationsTypes"
    />
  </HomeLayout>
</template>
