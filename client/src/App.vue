<script setup lang="ts">
import bgImage from "./assets/bg.png";
import MainSection from "./components/MainSection.vue";
import ProjectSection from "./components/ProjectSection.vue";
import TechSection from "./components/TechSection.vue";
</script>

<template>
  <div
    class="fixed -z-10 w-[100%] h-dvh top-0 right-0 bg-center bg-repeat bg-cover"
    :style="{ backgroundImage: `url('${bgImage}')` }"
  ></div>
  <div
    class="absolute -z-9 w-[100%] left-0 top-0 bg-gradient-to-t from-black/0 via-black/0 via-10% to-black/90"
    style="height: 80dvh"
  ></div>
  <MainSection />
  <TechSection />
  <ProjectSection/>
</template>