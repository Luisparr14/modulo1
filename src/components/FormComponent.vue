<script setup>
import { computed } from "vue";
import { reactive } from "vue";

const form = reactive({});
const emit = defineEmits(["submit"]);
const props = defineProps({
  fields: {
    type: Array,
    default: () => [
      {
        label: "Nombre",
        type: "text",
        name: "name",
        id: "name",
        placeholder: "Nombre del hotel",
      },
      {
        label: "NIT",
        type: "text",
        name: "nit",
        id: "nit",
        placeholder: "NIT del hotel",
      },
      {
        label: "Dirección",
        type: "text",
        name: "address",
        id: "address",
        placeholder: "Dirección del hotel",
      },
      {
        label: "Numero de habitaciones",
        type: "number",
        name: "rooms",
        id: "rooms",
        placeholder: "Numero de habitaciones",
      },
      {
        label: "Ciudad",
        type: "select",
        options: [
          { value: "", label: "Seleccione una ciudad" },
          { value: "Bogota", label: "Bogota" },
          { value: "Medellin", label: "Medellin" },
          { value: "Cali", label: "Cali" },
        ],
        name: "city",
        id: "city",
        placeholder: "Ciudad del hotel",
      },
    ],
  },
  buttonText: {
    type: String,
    default: "Crear",
  },
});

const handleChange = (e) => {
  const { name, value } = e.target;
  form[name] = value;
};

const fieldsComp = computed(() => {
  return props.fields.filter((field) => field.type !== "select");
});

const selectComp = computed(() => {
  return props.fields.find((field) => field.type === "select");
});

const handleSubmit = () => {
  emit("submit", form);
};
</script>
<template>
  <form class="row g-3" @submit.prevent="handleSubmit">
    <div v-for="field in fieldsComp" :key="field.id" class="col-md-6">
      <label :for="field.id" class="my-1">{{ field.label }}</label>
      <input
        :type="field.type"
        class="form-control"
        :id="field.id"
        :name="field.name"
        :placeholder="field.placeholder"
        :value="form[field.name]"
        @change="handleChange"
      />
    </div>
    <div v-if="selectComp" class="col-md-6">
      <label :for="selectComp.id" class="my-1">{{ selectComp.label }}</label>
      <select
        class="form-select"
        :id="selectComp.id"
        :name="selectComp.name"
        :placeholder="selectComp.placeholder"
        @change="handleChange"
      >
        <option
          v-for="option in selectComp.options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
    <div>
      <div class="col-12 justify-content-center d-flex">
        <button type="submit" class="btn btn-primary mb-3">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </form>
</template>
