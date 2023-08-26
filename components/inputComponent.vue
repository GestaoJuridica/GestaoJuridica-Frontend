<template>
  <div>
    <Icon :name="iconName" />

    <input :placeholder="placeHolder" :type="type" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: { type: String, required: true },
  iconName: { type: String, default: "" },
  placeHolder: { type: String, default: "" },
});
</script>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #007ef2;
  min-height: 60px;
  border-radius: 10px;
  gap: 20px;

  input {
    background-color: transparent;
  }
}

.icon {
  margin-left: 18px;
}

::placeholder {
  color: #fff;
}
</style>
