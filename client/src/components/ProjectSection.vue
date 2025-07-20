<script setup>
import { useProjectModalStore } from "../stores/useModalStore.js";
const sample = [
  {
    title: "Mobile Application",
    description:
      "A cross-platform mobile app built with Flutter for managing daily tasks efficiently.",
    techStack: ["Flutter", "Dart", "Firebase"],
    recommended: "Showcase interactive UI and real-time sync features.",
    img: new URL("../assets/bg.png", import.meta.url).href,
  },
  {
    title: "Echonote",
    description: "A note-taking web app with markdown support and cloud sync.",
    techStack: ["Vue.js", "Node.js", "MongoDB"],
    recommended: "Highlight markdown editor and seamless sync.",
    img: new URL("../assets/bg.png", import.meta.url).href,

  },
  {
    title: "DevfolioV1",
    description: "Personal portfolio website to display projects and skills.",
    techStack: ["React", "Tailwind CSS"],
    recommended: "Emphasize responsive design and smooth animations.",
    img: new URL("../assets/bg.png", import.meta.url).href,

  },
  {
    title: "Chat Application",
    description: "A real-time chat app supporting group and private messaging.",
    techStack: ["Vue.js", "Socket.io", "Express"],
    recommended: "Demonstrate real-time messaging and notifications.",
    img: new URL("../assets/bg.png", import.meta.url).href,

  },
  {
    title: "Gym Tracker",
    description: "An app to track workouts, progress, and set fitness goals.",
    techStack: ["React Native", "Redux"],
    recommended: "Show progress charts and goal-setting features.",
    img: new URL("../assets/bg.png", import.meta.url).href,

  },
];
const projectModel = useProjectModalStore();
</script>

<template>
  <div class="h-dvh overflow-x-clip p-16 flex flex-col justify-center">
    <div
      v-if="projectModel.isOpen"
      v-on:click="
        () => {
          projectModel.close();
          projectModel.setItem(null);
        }
      "
      class="fixed top-0 left-0 w-full h-full bg-black/50 z-10 flex items-center justify-center p-30"
    >
      <div
        v-on:click="
          (e) => {
            e.stopPropagation();
          }
        "
        class="bg-white h-full w-full rounded-[20px] text-black p-5"
      >
        {{ projectModel.item ? projectModel.item.description : "" }}
      </div>
    </div>

    <div class="bg-gray-100 h-full rounded-[20px] p-10 flex flex-col gap-5">
      <h2 class="text-4xl text-black/70 font-bold mb-4">SELECTED PROJECTS</h2>
      <div class="h-full flex flex-row flex-wrap gap-18">
        <div
          v-on:click="
            () => {
              projectModel.open();
              projectModel.setItem(item);
            }
          "
          v-for="(item, i) in sample"
          :key="i"
          class="p-5 w-[300px] h-[150px] rounded-md shadow-xs bg-white cursor-pointer text-black font-semibold text-lg flex flex-row items-end"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>
