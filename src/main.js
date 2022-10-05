import { createApp } from "vue";
import { createPinia } from "pinia";
import VueSweetalert2 from "vue-sweetalert2";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "normalize.css";
import "admin-lte/dist/js/adminlte.min.js";
import "admin-lte/dist/css/adminlte.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueSweetalert2);

app.mount("#app");
