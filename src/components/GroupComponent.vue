<script>
export default {
  props: ["group"],
};
</script>

<template>
  <div class="group-wrapper flex gap-md">
    <img :src="group.image" alt="" />
    <div class="group-info">
      <div class="group-name font-bold">{{ group.name }}</div>
      <div class="opacity-75">
        <span>{{ group.visibility }}</span>
        .
        <span>{{ group.members.length }} Members</span>
      </div>
      <button class="bg-secondary color-white join-btn">Join</button>
    </div>
  </div>
</template>

<style scoped>
.group-wrapper {
  border: 1px solid #666;
  margin-inline: 20%;
  margin-block: 2rem;
}

.group-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
}

.group-name {
  font-size: 1.2rem;
}

.join-btn {
  padding: 0.8rem 1.5rem;
}
</style>
