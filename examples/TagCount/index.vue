<script setup>
import { ref } from 'vue'

const tags = ref([
  'Javascript',
  'Vue.js',
  'TypeScript',
  'React',
  'Jest',
  'CSS',
  'Kubernates',
  'Node.js',
  'Go',
  'firebase',
  'tailwindcss',
  'MongoDB',
  'AngularJS',
  'Storybook',
  'msw',
  'Element Plus',
  'Github Actions',
  'Vite',
  'Rust',
  'HTML',
  'Sass',
  'Docker',
  'ECMAScript',
  'Qwik',
  'Nuxt.js',
])
</script>

<template>
  <el-card shadow="never" class="m-[10px]">
    <el-tag
      v-for="tag in tags"
      :key="tag"
      effect="light"
      type="info"
      round
      class="mr-[6px] mb-[6px]"
    >
      {{ tag }}
      <span
        class="inline-flex items-center justify-center border-rounded-[50%] bg-[#ccc] color-[#fff] w-[18px] h-[18px] ml-[4px] dark:bg-[#000]"
      >
        2
      </span>
    </el-tag>
  </el-card>
</template>
