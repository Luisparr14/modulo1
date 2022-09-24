<script setup>
defineProps({
  classProp: {
    type: String,
    default: "btn btn-primary",
  },
});
</script>
<template>
  <button :class="classProp">
    <slot id="text" />
  </button>
</template>
