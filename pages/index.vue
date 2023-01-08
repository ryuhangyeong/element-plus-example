<script setup>
import { useDark } from '@vueuse/core'

const { data: examples } = await useFetch('/api/examples')

const isDark = useDark()
</script>

<template>
  <AppHero />
  <AppContainer
    v-for="category in examples"
    :key="category.name"
    class="mt-[20px]"
  >
    <div class="flex items-center">
      <h2 class="m-0 mb-[20px] text-[24px] dark:text-white">
        {{ category.name }} UI
      </h2>
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
        class="mb-[20px]"
      >
        <el-card
          shadow="never"
          :body-style="{
            padding: 0,
          }"
          :class="[
            'card',
            {
              dark: isDark,
            },
          ]"
        >
          <NuxtLink
            :to="`/example/${example.name.toLowerCase()}`"
            class="decoration-none"
          >
            <div
              class="h-[200px] bg-[#f8f9fa] overflow-hidden text-center dark:bg-[#242424]"
            >
              <img
                :src="`/element-plus-example/img/logo/${example.name.toLocaleLowerCase()}.svg`"
                loading="lazy"
              />
            </div>
            <div class="p-[20px] dark:bg-[#1a1a1a]">
              <p class="m-0 text-[#333] dark:text-white">
                {{ example.name }}
              </p>
              <p class="m-0 mt-[6px] text-[12px] text-[#868e96]">
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

<style scoped lang="scss">
.card {
  &.dark {
    border: none;
    background-color: #242424;
  }
}
</style>
