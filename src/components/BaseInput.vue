<script>
export default {
  inheritAttrs: false,
  props: ["modelValue"],
};
</script>

<template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    @input="(event) => $emit('update:modelValue', event.target.value)"
    class="mt-1 focus:ring-blue-600 focus:border-blue-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
  />
</template>

<style scoped></style>
