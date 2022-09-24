export default [
  {
    path: "/",
    name: "Inicio",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/hoteles",
    name: "Hoteles",
    component: () => import("../views/HotelView.vue"),
  },
  {
    path: "/tipo-habitaciones",
    name: "Tipo de habitaciones",
    component: () => import("../views/RoomTypeView.vue"),
  },
  {
    path: "/acomodaciones",
    name: "Acomodaciones",
    component: () => import("../views/AccommodationView.vue"),
  },
];
