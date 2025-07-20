<script setup lang="ts">
import TechTemplate from "./TechTemplate.vue";

// Importing SVGs for Frontend technologies
import css from "../assets/frontend/css.svg?url";
import html from "../assets/frontend/html.svg?url";
import js from "../assets/frontend/javascript.svg?url";
import vue from "../assets/frontend/vue.svg?url";
import figma from "../assets/frontend/figma.svg?url";
import framer from "../assets/frontend/framer.svg?url";
import react from "../assets/frontend/react.svg?url";
import tailwind from "../assets/frontend/tailwind.svg?url";
import typescript from "../assets/frontend/typescript.svg?url";
import vite from "../assets/frontend/vite.svg?url";
// Importing SVGs for Backend technologies
import cake from "../assets/backend/cake.svg?url";
import express from "../assets/backend/express.svg?url";
import node from "../assets/backend/node.svg?url";
import codeigniter from "../assets/backend/codeigniter.svg?url";
import mongodb from "../assets/backend/mongo.svg?url";
import sql from "../assets/backend/sql.svg?url";
import postgres from "../assets/backend/postgres.svg?url";
import prisma from "../assets/backend/prisma.svg?url";
import supabase from "../assets/backend/supabase.svg?url";
import mongoose from "../assets/backend/mongoose.svg?url";
import php from "../assets/frontend/php.svg?url";
import next from "../assets/frontend/next.svg?url";
// Importing SVGs for Other technologies
import docker from "../assets/others/docker.svg?url";
import gcloud from "../assets/others/gcloud.svg?url";
import git from "../assets/others/git.svg?url";
import github from "../assets/others/github.svg?url";
import linux from "../assets/others/linux.svg?url";
import miro from "../assets/others/miro.svg?url";
import postman from "../assets/others/postman.svg?url";
</script>

<template>
  <div class="h-dvh overflow-x-clip p-5">
    <div class="flex flex-col justify-between p-14 h-full">
      <TechTemplate
        title="FRONTEND"
        :icons="[
          css,
          html,
          js,
          vue,
          figma,
          framer,
          react,
          tailwind,
          typescript,
          vite,
        ]"
      />
      <TechTemplate
        title="BACKEND"
        :icons="[
          cake,
          codeigniter,
          express,
          mongodb,
          mongoose,
          node,
          postgres,
          prisma,
          sql,
          supabase,
          php,
          next,
        ]"
      />
      <TechTemplate
        title="OTHERS"
        :icons="[
          docker,
          gcloud,
          git,
          github,
          linux,
          miro,
          postman,
        ]"
      />
    </div>
  </div>
</template>
