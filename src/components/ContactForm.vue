<script setup>
import { ref } from "vue";
import BaseInput from "./BaseInput.vue";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
</script>

<template>
  <form>
    <h1 class="text-large color-secondary form-title">GET IN TOUCH</h1>
    <div class="name_email flex justify-center items-center gap-md">
      <BaseInput
        name="name"
        placeholder="Name"
        v-model="name"
        class="input underlined"
      />
      <BaseInput
        name="email"
        type="email"
        placeholder="Email"
        v-model="email"
        class="input underlined"
      />
    </div>
    <div class="subject">
      <BaseInput
        name="subject"
        placeholder="Subject"
        v-model="subject"
        class="input underlined"
      />
    </div>
    <div class="message">
      <textarea
        v-model="message"
        placeholder="Type your message here..."
        name="message"
        id=""
        cols="20"
        rows="5"
        class="underlined w-full input"
      ></textarea>
    </div>
    <button class="submit-btn w-full">Submit</button>
  </form>
</template>

<style scoped>
form {
  padding: 2rem;
}

.form-title {
  padding-block: 1rem;
}

input {
  padding: 0.5rem;
  margin-block: 0.5rem;
}

textarea {
  padding-inline: 0.5rem;
  padding-block: 1rem;
}

.underlined {
  border: 1px solid transparent;
  border-bottom: 1px solid black;
  text-align: start;
}

.underlined:hover, .underlined:focus {
  border: 1px solid black;
}

.submit-btn {
  margin-block: 1rem;
  padding-block: .5rem;
  background: #000;
  color: #fff;
}
</style>
