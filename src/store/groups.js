import { ref, computed } from "vue";
import img8 from "../assets/img/img8.webp";

const state = ref({
  groups: [
    {
      id: 21,
      name: "Cloud Student Buddy Group",
      image: img8,
      visibility: "Public",
      createdAt: "28 Aug, 2021",
      createdBy: "Angela",
      members: ["Angela", "Mike"],
    },
  ],
});

export const groupsList = computed(() => {
  return state.value.groups;
});
