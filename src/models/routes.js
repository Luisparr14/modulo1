export default [
  {
    path: "/",
    name: "Inicio",
    icon: "fas fa-home",
    children: [
      {
        path: "",
        name: "Index",
        breadcrumb: "Inicio-Hoteles-Actualizar datos",
        component: () => import("../views/HomeView.vue"),
      },
    ],
  },
  {
    path: "/hoteles/",
    name: "Hoteles",
    icon: "fas fa-hotel",
    children: [
      {
        path: "",
        name: "Hotels",
        component: () => import("../views/HotelView.vue"),
      },
      {
        path: "crear",
        name: "CreateHotel",
        meta: {
          breadcrumb: "Inicio-Hoteles-Crear nuevo hotel",
          breadcrumbName: "Index-Hotels",
        },
        component: () => import("../views/HotelCreateView.vue"),
      },
      {
        path: ":id",
        as: "detalle",
        name: "HotelDetail",
        meta: {
          breadcrumb: "Inicio-Hoteles-Actualizar Datos de Hotel",
          breadcrumbName: "Index-Hotels",
        },
        component: () => import("../views/HotelDetailView.vue"),
      },
      {
        path: "habitaciones/",
        children: [
          {
            path: ":id",
            name: "HotelRooms",
            meta: {
              breadcrumb: "Inicio-Hoteles-Habitaciones",
              breadcrumbName: "Index-Hotels",
            },
            component: () => import("../views/RoomsView.vue"),
          },
          {
            path: "crear",
            name: "CreateRoom",
            meta: {
              breadcrumb: "Inicio-Hoteles-Habitación-Crear Habitación",
              breadcrumbName: "Index-Hotels-Rooms",
            },
            // component: () => import("../views/RoomCreateView.vue"),
          },
          {
            path: "editar/:id",
            name: "RoomDetail",
            meta: {
              breadcrumb:
                "Inicio-Hoteles-Habitación-Actualizar Datos de Habitación",
              breadcrumbName: "Index-Hotels-HotelRooms",
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
    icon: "fas fa-duotone fa-layer-group",
    component: () => import("../views/RoomTypeView.vue"),
  },
  {
    path: "/acomodaciones",
    name: "Acomodaciones",
    icon: "fas fa-bed",
    component: () => import("../views/AccommodationView.vue"),
  },
];
