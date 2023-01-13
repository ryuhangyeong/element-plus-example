<script setup>
import { useDark } from '@vueuse/core'

const { data: examples } = await useFetch('/api/examples')

const isDark = useDark()
</script>

<template>
  <AppHero />
  <AppContainer v-for="category in examples" :key="category.name" class="mt-5">
    <div class="flex items-center">
      <h2 class="m-0 mb-5 text-2xl dark:text-white">{{ category.name }} UI</h2>
    </div>
    <el-row :gutter="20">
      <el-col
        v-for="example in category.examples"
        :key="example.name"
        :xs="24"
        :sm="12"
        :md="12"
        :lg="6"
        :xl="6"
        class="mb-5"
      >
        <el-card
          shadow="never"
          :body-style="{
            padding: 0,
          }"
          :class="[isDark ? 'bg-[#242424] border-none' : '']"
        >
          <NuxtLink :to="`/example/${example.name.toLowerCase()}`">
            <div class="h-52 bg-gray-50 text-center dark:bg-[#242424]">
              <img
                :src="`/img/logo/${example.name.toLocaleLowerCase()}.svg`"
                loading="lazy"
                class="inline-block"
              />
            </div>
            <div class="p-5 dark:bg-[#1a1a1a]">
              <p class="m-0 text-gray-800 dark:text-white">
                {{ example.name }}
              </p>
              <p class="m-0 mt-2 text-xs text-gray-500">
                <span>
                  {{ example.components.length }}
                </span>
                components
              </p>
            </div>
          </NuxtLink>
        </el-card>
      </el-col>
    </el-row>
  </AppContainer>
</template>
