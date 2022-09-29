export default [
  {
    path: "/",
    name: "Inicio",
    breadcrumb: "Inicio-Hoteles-Actualizar datos",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/hoteles/",
    name: "Hoteles",
    children: [
      {
        path: "",
        component: () => import("../views/HotelView.vue"),
      },
      {
        path: "crear",
        name: "Crear Hotel",
        // component: () => import("../views/HotelCreateView.vue"),
      },
      {
        path: ":id",
        as: "detalle",
        name: "Hotel",
        meta: {
          breadcrumb: "Inicio-Hoteles-Actualizar Datos de Hotel",
        },
        component: () => import("../views/HotelDetailView.vue"),
      },
      {
        path: "habitaciones/",
        name: "Habitaciones",
        children: [
          {
            path: "",
            meta: {
              breadcrumb: "Inicio-Hoteles-Habitaciones",
            },
            component: () => import("../views/RoomsView.vue"),
          },
          {
            path: "crear",
            name: "Crear Habitación",
            meta: {
              breadcrumb: "Inicio-Hoteles-Habitaciones-Crear Habitación",
            },
            // component: () => import("../views/RoomCreateView.vue"),
          },
          {
            path: ":id",
            name: "Habitación",
            meta: {
              breadcrumb:
                "Inicio-Hoteles-Habitaciones-Actualizar Datos de Habitación",
            },
            component: () => import("../views/RoomDetailView.vue"),
          },
        ],
      },
    ],
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
