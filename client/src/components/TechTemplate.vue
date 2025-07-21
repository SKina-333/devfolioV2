<script>
export default {
  name: "TechTemplate",
  props: {
    title: {
      type: String,
      required: true,
    },
    icons: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>
<script setup>
import { onMounted, useTemplateRef } from "vue";
import { animate, inView, stagger } from "motion-v";

const containerRef = useTemplateRef("containerRef");
onMounted(() => {
  if (!containerRef.value) return;
  const children = containerRef.value.children
  inView(children, () => {
    animate(
      Array.from(children),
      { opacity: [0, 1], y: [30, 0] },
      {
        type: "spring",
        duration: 3,
        bounce: 0,
        delay: stagger(0.3, { startDelay: 1.5 }),
      }
    );
  });
});
</script>

<template>
  <div class="grid grid-cols-12 items-start">
    <h2 class="col-span-6 font-roboto-mono font-bold text-5xl text-gray-400">
      {{ title }}
    </h2>
    <div class="col-span-6">
      <ul ref="containerRef" class="flex flex-row gap-10 flex-wrap">

        <li v-for="(icon, index) in icons" :key="index">
          <div class="w-[45px] h-[45px]">
            <img :src="icon" alt=" Icon" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
