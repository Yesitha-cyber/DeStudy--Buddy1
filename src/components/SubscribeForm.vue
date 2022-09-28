<script setup>
import { ref } from "vue";
import BaseInput from "./BaseInput.vue";
const email = ref("");
</script>

<template>
  <div class="w-screen text-center">
    <h2 class="sub-title">Subscribe Form</h2>
    <div class="sub-wrapper">
      <BaseInput
        type="email"
        name="email"
        v-model="email"
        placeholder="e.g., email@example.com"
        class="mail-input"
      />
      <button class="bg-black color-white join-btn">Join</button>
    </div>
  </div>
</template>

<style scoped>
.sub-wrapper {
  border: 1px solid black;
  width: 100%;
  display: flex;
}

.sub-title {
  font-size: 1.65rem;
  font-weight: 700;
  padding: 1rem 0;
}

.mail-input {
  text-align: left;
  padding-inline: 1rem;
}

.join-btn {
  padding: .6rem 1rem
}
</style>
