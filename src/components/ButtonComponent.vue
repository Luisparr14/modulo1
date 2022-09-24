<script setup>
defineProps({
  class: {
    type: String,
    default: "btn",
  },
});
</script>
<template>
  <button class="{{class}}">
    <slot id="text" />
  </button>
</template>
