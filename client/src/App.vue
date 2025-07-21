<script setup lang="ts">
import bgImage from "./assets/bg.png";
import MainSection from "./components/MainSection.vue";
import ProjectSection from "./components/ProjectSection.vue";
import TechSection from "./components/TechSection.vue";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

onMounted(() => {
  // Initialize smoother
  ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.5, // scroll speed (higher = slower)
    effects: true,
  });
});
</script>

<template>
  <div id="smooth-wrapper" class="relative">
    <div
      class="fixed -z-10 w-[100%] h-dvh top-0 right-0 bg-center bg-repeat bg-cover"
      :style="{ backgroundImage: `url('${bgImage}')` }"
    ></div>
    <div
      class="absolute -z-9 w-[100%] left-0 top-0 bg-gradient-to-t from-black/0 via-black/0 via-10% to-black/90"
      style="height: 80dvh"
    ></div>

    <div>
      <div id="smooth-content" class="">
        <MainSection />
        <TechSection />
        <ProjectSection />
      </div>
    </div>
  </div>
</template>
