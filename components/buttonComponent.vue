<template>
  <button>{{ props.text }}</button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
button {
  width: 50%;
  background-color: #007ef2;
  color: #fff;
  border-radius: 10px;
  height: 40px;
}
</style>
