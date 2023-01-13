<script setup lang="ts">
const {
  params: { type },
} = useRoute()

useHead({
  titleTemplate: (titleChunk) => {
    return `${titleChunk} - ${type}`
  },
})

const { data: examples } = await useFetch('/api/example', {
  params: {
    type,
  },
})
</script>

<template>
  <AppContainer>
    <el-page-header class="mt-8">
      <template #title>
        <NuxtLink to="/" class="el-link el-link--primary is-underline">
          <span>Back</span>
        </NuxtLink>
      </template>
      <template #content>
        <h2 class="text-[30px] font-semibold dark:text-white">
          {{ type }}
        </h2>
      </template>
      <div class="mt-8">
        <AppExample
          v-for="component in examples"
          :component="component"
          :key="component.title"
        />
      </div>
    </el-page-header>
  </AppContainer>
</template>
