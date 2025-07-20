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

<template>
  <div class="grid grid-cols-12 items-start">
    <h2
      class="col-span-6 font-roboto-mono font-bold text-5xl text-gray-400"
    >
      {{ title }}
    </h2>
    <div class="col-span-6 ">
      <ul class="flex flex-row gap-10 flex-wrap">
        <li v-for="(icon, index) in icons" :key="index">
          <div class="w-[45px] h-[45px]">
            <img :src="icon" alt=" Icon" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
