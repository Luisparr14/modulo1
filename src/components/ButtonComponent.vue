<script setup>
defineProps({
  classProp: {
    type: String,
    default: "btn btn-primary",
  },
  label: {
    type: String,
    default: "Default Label",
  },
});
</script>
<template>
  <button :class="classProp">
    {{ label }}
  </button>
</template>
