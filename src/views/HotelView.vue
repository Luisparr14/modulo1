<script setup>
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import { getHotels } from "../data/hotels";
import TableComponent from "../components/TableComponent.vue";
import IndicatorPageComponent from "../components/IndicatorPageComponent.vue";
import HotelSVG from "../assets/icons/HotelIcon.vue";
import HomeLayout from "../layouts/HomeLayout.vue";

const router = useRouter();

const state = reactive({
  hotels: [],
});

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

const createHotel = () => {
  router.push({ name: "CreateHotel" });
};

onMounted(async () => {
  const { data: hotels } = await getHotels();
  state.hotels = hotels;
});
</script>
<template>
  <HomeLayout>
    <IndicatorPageComponent
      :button-action="createHotel"
      :currentPage="'Hoteles'"
      :label="'Crear Hotel'"
    >
      <template #svgIcon>
        <HotelSVG />
      </template>
    </IndicatorPageComponent>
    <TableComponent :data="state.hotels" :actions="actions" />
  </HomeLayout>
</template>
