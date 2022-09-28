<script setup>
import { RouterLink } from "vue-router";
import { computed } from "vue";

const links = computed(() => {
  return [
    { title: "Home", path: "/" },
    { title: "Features", path: "/features" },
    { title: "About", path: "/about" },
    { title: "News", path: "/news" },
    { title: "FAQ", path: "/faq" },
    { title: "Contact", path: "/contact" },
    { title: "Groups List", path: "/groups-list" },
  ];
});
</script>

<template>
  <header>
    <div class="flex justify-center logo-wrapper">
      <img src="../assets/logo.webp" alt="logo" />
    </div>
    <nav>
      <ul class="w-screen flex justify-center items-center gap-md">
        <li v-for="(link, i) in links" :key="i" class="cursor-pointer">
          <RouterLink :to="link.path">
            {{ link.title }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.logo-wrapper {
  padding-block: 2rem;
}

nav {
  padding-bottom: 3rem;
}
</style>
