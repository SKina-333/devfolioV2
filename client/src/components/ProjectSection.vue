<script setup>
import { useProjectModalStore } from "../stores/useModalStore.js";
const sample = [
  {
    title: "Mobile Application",
    description:
      "A cross-platform mobile app built with Flutter for managing daily tasks efficiently. This application allows users to create, edit, and delete tasks, set reminders, and organize their daily schedule with ease. It features a sleek and intuitive UI, real-time synchronization across devices using Firebase, and supports offline mode for uninterrupted productivity. The app also includes customizable themes, push notifications, and analytics to help users track their productivity trends over time. With robust security and seamless integration with calendar apps, it is designed to boost efficiency for both personal and professional use.",
    techStack: ["Flutter", "Dart", "Firebase"],
    highlights: "Showcase interactive UI and real-time sync features.",
    img: new URL("../assets/bg.png", import.meta.url).href,
  },
  {
    title: "Echonote",
    description: "A note-taking web app with markdown support and cloud sync.",
    techStack: ["Vue.js", "Node.js", "MongoDB"],
    highlights: "Highlight markdown editor and seamless sync.",
    img: new URL("../assets/bg.png", import.meta.url).href,
  },
  {
    title: "DevfolioV1",
    description: "Personal portfolio website to display projects and skills.",
    techStack: ["React", "Tailwind CSS"],
    highlights: "Emphasize responsive design and smooth animations.",
    img: new URL("../assets/bg.png", import.meta.url).href,
  },
  {
    title: "Chat Application",
    description: "A real-time chat app supporting group and private messaging.",
    techStack: ["Vue.js", "Socket.io", "Express"],
    highlights: "Demonstrate real-time messaging and notifications.",
    img: new URL("../assets/bg.png", import.meta.url).href,
  },
  {
    title: "Gym Tracker",
    description: "An app to track workouts, progress, and set fitness goals.",
    techStack: ["React Native", "Redux"],
    highlights: "Show progress charts and goal-setting features.",
    img: new URL("../assets/bg.png", import.meta.url).href,
  },
];
const projectModal = useProjectModalStore();
</script>

<template>
  <div class="h-dvh overflow-x-clip p-16 flex flex-col justify-center">
    <div
      v-if="projectModal.isOpen"
      v-on:click="
        () => {
          projectModal.close();
          projectModal.setItem(null);
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
        class="bg-white h-full w-full rounded-[20px] text-black flex flex-row justify-between"
      >
        <div class="p-5 flex flex-col gap-5">
          <h2 class="font-bold text-2xl">
            {{ projectModal.item ? projectModal.item.title : "" }}
          </h2>
          <div class="flex flex-row items-center">
            <h3>Tags:</h3>
            <div
              v-for="(tag, i) in projectModal.item
                ? projectModal.item.techStack
                : []"
              :key="i"
              class="ml-2 px-2 py-1 bg-gray-200 rounded-md text-sm"
            >
              {{ tag }}
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-blue-600 text-sm font-semibold">highlights:</h3>
            <p class=" text-md">
              {{ projectModal.item ? projectModal.item.highlights : "" }}
            </p>
          </div>
          <div>
            
            <h3 class="text-blue-600 text-sm font-semibold">Description:</h3>
            <p class="text-md">
              {{ projectModal.item ? projectModal.item.description : "" }}
            </p>
          </div>
        </div>
        <div class="min-w-[450px] max-w-[450px] h-full rounded-r-[20px] border overflow-clip">
          <img
            :src="projectModal.item ? projectModal.item.img : ''"
            alt="cover"
            class="h-full"
          />
        </div>
      </div>
    </div>

    <div class="bg-gray-100 h-full rounded-[20px] p-10 flex flex-col gap-5">
      <h2 class="text-4xl text-black/70 font-bold mb-4">SELECTED PROJECTS</h2>
      <div class="h-full flex flex-row flex-wrap gap-18">
        <div
          v-on:click="
            () => {
              projectModal.open();
              projectModal.setItem(item);
            }
          "
          v-for="(item, i) in sample"
          :key="i"
          class="w-[300px] h-[150px] rounded-md shadow-xs bg-white cursor-pointer text-black font-semibold text-lg flex flex-row items-end justify-between"
        >
          <h2 class="ml-2">
            {{ item.title }}
          </h2>
          <div class="w-[100px] h-full rounded-r-md border overflow-clip">
            <img :src="item.img" alt="cover" class="h-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
