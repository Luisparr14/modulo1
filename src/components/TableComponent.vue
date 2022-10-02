<script setup>
import ButtonComponent from "./ButtonComponent.vue";

defineProps({
  data: {
    type: Array,
    default: () => [
      {
        id: 17,
        city_id: 2,
        name: "DECAMERON BARRANQUILLA ORILLA DEL MAR",
        nit: "222234",
        address: "CENTRO ESTADIO",
        num_rooms: 20,
        city: {
          id: 2,
          name: "BARRANQUILLA",
        },
      },
    ],
  },
  columns: {
    type: Array,
    default: () => [
      {
        label: "Nit",
        field: "nit",
      },
      {
        label: "Nombre",
        field: "name",
      },
      {
        label: "Ciudad",
        field: "city",
      },
      {
        label: "Dirección",
        field: "address",
      },
      {
        label: "Habitaciones",
        field: "num_rooms",
      },
    ],
  },
  actions: {
    type: Array,
    default: () => [
      {
        label: "Opc-1",
        class: "btn btn-primary btn-sm px-3 d-flex m-auto",
        action: () => {
          console.log("Opc-1");
        },
      },
      {
        label: "Opc-2",
        class: "btn btn-danger btn-sm px-3 d-flex m-auto",
        action: () => {
          console.log("Opc-2");
        },
      },
    ],
  },
  withActions: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <div class="card-body table-responsive elevation-2">
    <table class="table table-hover text-nowrap">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.label">
            {{ column.label.toUpperCase() }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="row.nit">
          <td v-for="column in columns" :key="column.label">
            {{ row[column.field].name || row[column.field] }}
          </td>
          <template v-if="withActions">
            <td v-for="action in actions" :key="action.label" class="option">
              <ButtonComponent
                :class="action.class"
                @click="action.action(row)"
                :label="action.label"
              />
            </td>
          </template>
        </tr>
        <tr v-if="data.length === 0">
          <td colspan="5" class="text-center">No hay datos para mostrar</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
th {
  font-size: 12px;
  padding: 0 0.7rem !important;
}

td {
  font-size: 14px;
  padding: 0.5rem 0.7rem !important;
}

.btn:hover {
  background-color: rgb(20, 127, 221) !important;
}
.option {
  min-width: 110px;
}
</style>
