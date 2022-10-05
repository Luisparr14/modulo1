<script setup>
const images = [
  {
    alt: "Imagen 1",
    src: "https://pix10.agoda.net/geo/city/685461/f8e2aa83b9d32839b1f94381b7bc2448.jpg",
  },
  {
    alt: "Imagen 2",
    src: "https://cnnespanol.cnn.com/wp-content/uploads/2021/06/2F210610151521-splurge-hotel-soneva-jani-super-tease.jpg",
  },
  {
    alt: "Imagen 3",
    src: "https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2017-03/hotel-leon-city-express-fachada-noche.jpg",
  },
];
</script>
<template>
  <div
    id="carouselExampleControls"
    class="carousel slide my-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        v-for="image in images"
        :key="image.alt"
        class="carousel-item active"
        data-bs-interval="6000"
      >
        <img :src="image.src" class="d-block w-100" :alt="image.alt" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
