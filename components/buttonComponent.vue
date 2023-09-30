<template>
  <div>
    <button v-if="text">
      <span>
        {{ props.text }}
      </span>
    </button>

    <button v-else>
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: { type: String },
});
</script>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #007ef2;
  color: #fff;
  border-radius: 10px;
  height: 40px;
  cursor: pointer;
  padding: 1rem;
}
</style>
