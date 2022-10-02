<script setup>
import { computed, onMounted } from "vue";
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
        name: "num_rooms",
        id: "num_rooms",
        placeholder: "Numero de habitaciones",
      },
      {
        label: "Ciudad",
        type: "select",
        options: [
          { value: "", label: "Seleccione una ciudad" },
          { value: "1", label: "Monteria" },
          { value: "3", label: "Medellin" },
          { value: "3", label: "Cali" },
          { value: "4", label: "Bogota" },
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
  moreThanOneButton: {
    type: Boolean,
    default: false,
  },
});

const fieldsComp = computed(() => {
  return props.fields.filter((field) => field.type !== "select");
});

const selectComp = computed(() => {
  return props.fields.filter((field) => field.type === "select");
});

const handleSubmit = () => {
  emit("submit", form);
};

onMounted(async () => {
  setTimeout(() => {
    props.fields.forEach((field) => {
      form[field.name] = field.value;
    });
  }, 1000);
});
</script>
<template>
  <form class="row g-3 px-5" @submit.prevent="handleSubmit">
    <div v-for="field in fieldsComp" :key="field.id" class="col-md-6 mb-2">
      <label :for="field.id" class="my-1">{{ field.label }}</label>
      <input
        :type="field.type"
        class="form-control"
        :id="field.id"
        :name="field.name"
        v-model="form[field.name]"
      />
    </div>
    <div v-for="select in selectComp" :key="select.id" class="col-md-6">
      <label :for="select.id" class="my-1">{{ select.label }}</label>
      <select
        class="form-control"
        :id="select.id"
        :name="select.name"
        v-model="form[select.name]"
      >
        <option
          v-for="option in select.options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
    <div class="col-12 mt-4">
      <div
        class="d-flex gap-2 justify-content-end"
        :class="
          moreThanOneButton ? 'justify-content-between' : 'justify-content-end'
        "
      >
        <slot name="aditionalButton"></slot>
        <button type="submit" class="btn btn-primary mb-3">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </form>
</template>

<style scoped>
button {
  margin: 0 5px;
}
</style>
