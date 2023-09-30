<template>
  <div>
    <button v-if="text">
      <span>
        {{ props.text }}
      </span>
    </button>
    <button v-else>
      <img :src="props.icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  text: { type: String },
  icon: { type: String },
});
</script>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  background-color: #007ef2;
  color: #fff;
  border-radius: 10px;
  height: 40px;
  cursor: pointer;
  padding: 1rem;
}
</style>
