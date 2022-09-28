<script setup>
import QuoteSection from "../components/QuoteSection.vue";
import FeaturesCollage from "../components/FeaturesCollage.vue";
</script>

<template>
  <div class="w-screen text-center">
    <h1 class="text-xl text-left title">Features</h1>
    <p>
      Destudy Buddy will be providing the following features which would enhance
      the experience of students using the application. These features are
      designated to help cloud students engage more with other students as well
      as find friends off the same interest.
    </p>

    <FeaturesCollage />

    <QuoteSection />
  </div>
</template>

<style scoped>
.title {
  padding-left: 10%;
  padding-bottom: 2rem;
}
p {
  margin: 0 25%;
  padding-bottom: 3rem;
  line-height: 1.7;
}
</style>
