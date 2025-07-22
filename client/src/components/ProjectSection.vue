<script setup>
import { onMounted, useTemplateRef } from "vue";
import { useProjectModalStore } from "../stores/useModalStore.js";
import { animate, AnimatePresence, inView, motion } from "motion-v";
const sample = [
  {
    title: "Property Rental Management App",
    description:
      "Features:\n- User authentication and authorization\n- Property listing and management\n- Tenant management\n- Payment tracking and invoicing\n\n Link to the project: ",
    techStack: ["Flutter", "Dart"],
    highlights: "An application built to manage property rentals, including tenant management and payment tracking.",
    img: new URL("../assets/bg.png", import.meta.url).href,
    color: ["#4158D0", "#C850C0"]
    },
    {
    title: "Echonote",
    description: "Features:\n- Audio to text conversion\n- Google Speech API integration\n- User-friendly interface\n\n Link to the project: \nhttps://github.com/SKina-333/echonote",
    techStack: ["React", "Node.js", "Postgres","NextJS", "Tailwind CSS"],
    highlights: "An Audio to Text converter with Google Speech API integration.",
    img: new URL("../assets/projects/Echo.png", import.meta.url).href,
    color: ["#00DBDE", "#92FE9D"]
    },
    {
    title: "DevfolioV1",
    description: "Features:\n- Personal portfolio website\n- Project showcase\n- Skills display\n\n Link to the project: \nhttps://devfolio-45vy.onrender.com/",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    highlights: "Personal portfolio website to display projects and skills.",
    img: new URL("../assets/projects/devfolioV1.png", import.meta.url).href,
    color: ["#FA8BFF", "#FEC0A7"]
    },
    {
    title: "Chat Application",
    description: "Features:\n- Real-time messaging\n- User authentication\n- Socket.io integration\n\n Link to the project: \nhttps://github.com/SKina-333/chatapplication",
    techStack: ["React", "Socket.io", "Express", "Supabase"],
    highlights: "Demonstrate real-time messaging",
    img: new URL("../assets/projects/Chat.png", import.meta.url).href,
    color: ["#8EC5FC", "#E0C3FC"]
    },
    {
    title: "Gym Tracker",
    description: "Features:\n- Workout tracking\n- Progress monitoring\n\n Link to the project: \nhttps://github.com/SKina-333/GymTracker-TailwindCSS",
    techStack: ["React", "ExpressJS", "Supabase", "Tailwind CSS"],
    highlights: "An app to track workouts, progress, and set fitness goals.",
    img: new URL("../assets/projects/Gym.png", import.meta.url).href,
    color: ["#85FFBD", "#FFFB7D"]
  },
];
const projectModal = useProjectModalStore();
const containerRef = useTemplateRef("containerRef");

onMounted(() => {
  if (!containerRef.value) return;

  inView(containerRef.value, () => {
    animate(
      containerRef.value,
      { opacity: [0, 1], y: [80, 0] },
      {
        type: "spring",
        duration: 3,
        bounce: 0,
        delay: 0.5,
      }
    );
  });
});
</script>

<template>
  <div class="h-dvh relative overflow-x-clip p-16 flex flex-col justify-center">
    <AnimatePresence>
      <motion.div
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
        v-if="projectModal.isOpen"
        class="fixed top-0 left-0 w-full h-full bg-black/50 z-10 flex items-center justify-center p-30"
      >
      </motion.div>
    </AnimatePresence>
    <AnimatePresence>
      <motion.div
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :exit="{ opacity: 0, scale: 0.5 }"
        v-on:click="
          () => {
            projectModal.close();
            projectModal.setItem(null);
          }
        "
        v-if="projectModal.isOpen"
        class="fixed z-11 top-0 left-0 p-20 h-full w-full flex flex-col justify-center items-center"
      >
        <div
          v-on:click="
            (e) => {
              e.stopPropagation();
            }
          "
          class="bg-white rounded-[20px] h-full text-black flex flex-row justify-between"
        >
          <div class="p-5 flex flex-col gap-5">
            <motion.h2 class="font-bold text-2xl">
              {{ projectModal.item ? projectModal.item.title : "" }}
            </motion.h2>
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
              <p class="text-md">
                {{ projectModal.item ? projectModal.item.highlights : "" }}
              </p>
            </div>
            <div>
              <h3 class="text-blue-600 text-sm font-semibold">Description:</h3>
              <p class="text-md whitespace-pre-line">
                {{ projectModal.item ? projectModal.item.description : "" }}
              </p>
            </div>
          </div>
          <div
            class="min-w-[450px] max-w-[450px] h-full rounded-r-[20px] border overflow-clip"
          >
            <img
              :src="projectModal.item ? projectModal.item.img : ''"
              alt="cover"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>

    <div ref="containerRef" class="bg-[#26262b] h-full rounded-[20px] p-10 flex flex-col gap-5">
      <h2 class="text-4xl text-white/80 font-bold mb-4">SELECTED PROJECTS</h2>
      <div class="h-full flex flex-row flex-wrap gap-18">
        <motion.div
          v-on:click="
            () => {
              projectModal.open();
              projectModal.setItem(item);
            }
          "
          :whileHover="{
            scale: 1.1,
            transition: { duration: 0.2, type: 'spring', bounce: 0 },
          }"
          :whilePress="{ scale: 0.9 }"
          v-for="(item, i) in sample"
          :key="i"
          :style="{
            background: `radial-gradient(circle at top left, ${item.color[0]} 0%, ${item.color[1]} 100%)`
          }"
          class="w-[300px] h-[150px] rounded-md shadow-xl cursor-pointer text-black/70 font-semibold text-lg flex flex-row items-end justify-between"
        >
          <motion.h2 class="ml-2">
            {{ item.title }}
          </motion.h2>
            <div class="w-[100px] h-full rounded-r-md border overflow-clip">
            <img :src="item.img" alt="cover" class="h-full w-full object-cover" />
            </div>
        </motion.div>
      </div>
    </div>
  </div>
</template>
