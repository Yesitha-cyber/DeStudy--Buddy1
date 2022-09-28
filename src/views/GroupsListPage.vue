<script setup>
import GroupComponent from "../components/GroupComponent.vue";
import { groupsList } from "../store/groups";
</script>

<template>
  <div>
    <GroupComponent :groups="groupsList" />
  </div>
</template>

<style scoped></style>
