<script setup>
import ContactForm from "../components/ContactForm.vue";
import GroupComponent from "../components/GroupComponent.vue";
import SubscribeForm from "../components/SubscribeForm.vue";
import { groupsList } from "../store/groups";
</script>

<template>
  <div class="w-screen text-center">
    <h1 class="text-xl color-secondary main-title">DESTUDY BUDDY</h1>
    <h2>CarouselComponent</h2>
    <h1 class="text-large color-secondary section-title">
      WHAT IS DESTUDY BUDDY?
    </h1>
    <p>
      DESTUDY BUDDY is an application which allows users to swipe through and
      like or dislike other student profiles which consists of a student bio and
      details regarding hobby, area of study and key interest.
    </p>
    <img src="../assets/img/img2.webp" alt="" />
    <h1 class="text-large color-secondary section-title">OUR TECHNOLOGY</h1>
    <p>
      Users will be able to access Destuddy Buddy through Appstore and Playstore
      and upon downloading users will be provided with a tutorial on how they
      could use the application.Furthermore, users will have access to calls or
      message with each via the application.
    </p>
    <img src="../assets/img/img3.webp" alt="" />
    <div class="groups-list w-screen">
      <GroupComponent
        v-for="group in groupsList"
        :key="group.id"
        :group="group"
      />
    </div>
    <ContactForm class="w-full padded" />
    <SubscribeForm class="w-full padded" />
  </div>
</template>

<style scoped>
.main-title {
  padding-block: 2.5rem;
}

.section-title {
  padding-block: 2rem;
}

p {
  width: 50%;
  margin-inline: auto;
  line-height: 1.7;
  padding-top: 2rem;
  padding-bottom: 3rem;
}

.padded {
  padding-inline: 20%;
}
</style>
