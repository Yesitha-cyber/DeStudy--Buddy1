<script setup>
import BaseInput from "./BaseInput.vue";
import { ref } from "vue";
const firstName = ref("");
const lastName = ref("");
const email = ref("");
</script>

<template>
  <div class="quote-wrapper w-screen">
    <h2 class="text-large">Get a quote</h2>
    <p>
      This is a Paragraph. Click on "Edit Text" or double click on the text box
      to start editing the content.
    </p>
    <form class="gap-md text-left">
      <div>
        <label for="firstName">First Name</label>
        <BaseInput
          type="text"
          name="firstName"
          id="firstName"
          v-model="firstName"
          class="form-input underlined"
        />
      </div>
      <div>
        <label for="lastName">Last Name</label>
        <BaseInput
          type="text"
          name="lastName"
          id="lastName"
          v-model="lastName"
          class="form-input underlined"
        />
      </div>
      <div>
        <label for="email">Email</label>
        <BaseInput
          type="email"
          name="email"
          v-model="email"
          id="email"
          class="form-input underlined"
          requried
        />
      </div>
      <button class="send-btn text-center">Send</button>
    </form>
  </div>
</template>

<style scoped>
.quote-wrapper {
  background: #cccccc;
  padding: 4rem 0;
  margin: 1rem 0;
}

p {
  padding: 2rem 0;
  margin: 0 30%;
}

form {
  display: flex;
  padding: 1rem;
  align-items: flex-end;
  justify-content: center;
}
.send-btn {
  background: #5d62f9;
  border: 1px solid #5d62f9;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: #fff;
}

.send-btn:hover {
  background: #fff;
  border: 1px solid #5d62f9;
  color: #5d62f9;
}

.form-input {
  padding: 0.7rem;
}

.underlined {
  border-bottom: 1px solid black;
  text-align: start;
}

.underlined:hover, .underlined:focus {
  border-bottom: 2px solid black;
}
</style>
