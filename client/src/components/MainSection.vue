<script setup>
import {
  AnimatePresence,
  hover,
  motion,
  scale,
  animate,
  stagger,
} from "motion-v";
import { splitText } from "motion-plus";
import { useTemplateRef, onMounted } from "vue";

const openLinkedIn = () => {
  window.open(
    "https://www.linkedin.com/in/skprojx/",
    "_blank",
    "noopener,noreferrer"
  );
};
const openGit = () => {
  window.open("https://github.com/SKina-333", "_blank", "noopener,noreferrer");
};
const containerRef = useTemplateRef("containerRef");

onMounted(() => {
  document.fonts.ready.then(() => {
    if (!containerRef.value) return;
    containerRef.value.classList.remove("invisible");

    const pro = containerRef.value.querySelector("#profession");
    const desc = containerRef.value.querySelector("#description");
    const email = containerRef.value.querySelector("#email");
    const arrow = containerRef.value.querySelector("#arrow");
    const line = containerRef.value.querySelector("#line");
    const linkedin = containerRef.value.querySelector("#linkedin");
    const github = containerRef.value.querySelector("#github");
    const cv = containerRef.value.querySelector("#cv");

    if (!(pro || desc || email || arrow || line || linkedin || github || cv)) return;


    animate(
      pro,
      { opacity: [0, 1], x: [-100, 0] },
      {
        type: "spring",
        duration: 3,
        bounce: 0,
        delay:  1,
      }
    );
    animate(
      desc,
      { opacity: [0, 1], x: [-100, 0] },
      {
        type: "spring",
        duration: 3,
        bounce: 0,
        delay: 1.2 ,
      }
    );
    animate(
      email,
      { opacity: [0, 1], x: [50, 0] },
      {
        type: "spring",
        duration: 3,
        bounce: 0,
        delay: 1.4,
      }
    );
    animate(
      arrow,
      { opacity: [0, 1] },
      {
        type: "spring",
        duration: 3,
        bounce: 0,
        delay: 1.6,
      }
    );
    animate(
      line,
      { opacity: [0, 1], x: [-50, 0] },
      {
        type: "spring",
        duration: 3,
        bounce: 0,
        delay: 1.4,
      }
    );
    animate(
      linkedin,
      { opacity: [0, 1], y: [50, 0] },
      {
        type: "spring",
        duration: 3,
        bounce: 0,
        delay: 1.6,
      }
    );
    animate(
      github,
      { opacity: [0, 1], y: [50, 0] },
      {
        type: "spring",
        duration: 3,
        bounce: 0,
        delay: 1.7,
      }
    );
    animate(
      cv,
      { opacity: [0, 1], y: [50, 0] },
      {
        type: "spring",
        duration: 3,
        bounce: 0,
        delay: 1.8,
      }
    );
  });
});
</script>
<template>
  <div class="h-dvh overflow-x-clip p-5">
    <div
      ref="containerRef"
      class="invisible flex flex-col justify-between h-full"
    >
      <div class="relative p-14 flex flex-col gap-5 items-start">
        <div>
          <h1
            id="profession"
            class="w-[400px] text-6xl text-wrap font-bold bg-linear-75 from-blue-600 to-blue-400 bg-clip-text text-transparent"
          >
            Full Stack Developer
          </h1>
        </div>

        <p id="description" class="text-sm font-roboto-mono max-w-[500px]">
          Hi, you can call me Kina. I am a Software Developer with a love for
          good UI/UX designs.
        </p>

        <div
          class="absolute -bottom-10 -right-50 flex flex-row items-center gap-5 -rotate-90 cursor-default"
        >
          <motion.div
            id="arrow"
            :animate="{ x: [0, -50, 0] }"
            :transition="{ repeat: Infinity, duration: 4, ease: 'easeInOut' }"
            class="w-[20px] h-[20px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          </motion.div>
          <span id="line" class="w-[200px] h-[1px] bg-white"></span>
          <div id="email">skprojx.devstack@gmail.com</div>
        </div>
      </div>
      <div class="p-14 flex flex-row items-center gap-5">
        <div id="linkedin" @:click="openLinkedIn" class="w-[40px] h-[40px] cursor-pointer">
          <motion.svg
            height="40"
            width="40"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              id="background"
              :whileHover="{ fill: '#e6e6e6' }"
              :animate="{ fill: '#3d3d3d' }"
              d="M512,64c0,-35.323 -28.677,-64 -64,-64l-384,0c-35.323,0 -64,28.677 -64,64l0,384c0,35.323 28.677,64 64,64l384,0c35.323,0 64,-28.677 64,-64l0,-384Z"
            />

            <g id="shapes" pointer-events="none">
              <rect
                height="257.962"
                fill="#1e1e1e"
                width="85.76"
                x="61.053"
                y="178.667"
              />
              <path
                d="M104.512,54.28c-29.341,0 -48.512,19.29 -48.512,44.573c0,24.752 18.588,44.574 47.377,44.574l0.554,0c29.903,0 48.516,-19.822 48.516,-44.574c-0.555,-25.283 -18.611,-44.573 -47.935,-44.573Z"
                fill="#1e1e1e"
              />
              <path
                d="M357.278,172.601c-45.49,0 -65.866,25.017 -77.276,42.589l0,-36.523l-85.738,0c1.137,24.197 0,257.961 0,257.961l85.737,0l0,-144.064c0,-7.711 0.554,-15.42 2.827,-20.931c6.188,-15.4 20.305,-31.352 43.993,-31.352c31.012,0 43.436,23.664 43.436,58.327l0,138.02l85.741,0l0,-147.93c0,-79.237 -42.305,-116.097 -98.72,-116.097Z"
                fill="#1e1e1e"
              />
            </g>
          </motion.svg>
        </div>

        <div id="github" class="w-[40px] h-[40px] cursor-pointer">
          <motion.svg
            :initial="{ fill: '#3d3d3d' }"
            :whileHover="{ fill: '#e6e6e6' }"
            height="40"
            width="40"
            enable-background="new 0 0 32 32"
            id="Layer_1"
            version="1.0"
            viewBox="0 0 32 32"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              clip-rule="evenodd"
              d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
              fill-rule="evenodd"
            />
          </motion.svg>
        </div>

        <div id="cv">
          <a
            href="../../public/CV-SOKINAHO.pdf"
            download
            class="p-2 rounded-[5px] bg-white text-black cursor-pointer"
          >
            Grab my CV
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
