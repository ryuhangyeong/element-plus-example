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
  <el-card shadow="never" class="m-4">
    <el-tag
      v-for="tag in tags"
      :key="tag"
      effect="light"
      type="info"
      round
      class="mr-3 mb-3"
    >
      {{ tag }}
      <span
        class="inline-flex items-center justify-center rounded-full bg-[#ccc] color-white w-5 h-5 ml-1 dark:bg-black"
      >
        2
      </span>
    </el-tag>
  </el-card>
</template>
