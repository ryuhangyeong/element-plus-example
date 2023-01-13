<script setup>
import { useToggle } from '@vueuse/core'

const activeIndex = ref('1')
const [value, toggle] = useToggle()
</script>

<template>
  <el-header
    class="relative border-b border-solid border-b-gray-200 p-0 w-full h-full bg-white dark:bg-[#242424] dark:border-b-gray-900"
  >
    <div class="flex justify-between items-center p-4">
      <div class="flex items-center justify-center">
        <span
          class="mr-3 w-5 h-5 bg-white cursor-pointer lg:hidden dark:bg-[#242424]"
          @click="toggle()"
        >
          <a v-if="value">
            <el-icon size="20">
              <Close />
            </el-icon>
          </a>
          <a class="block relative h-full" v-else>
            <el-icon
              class="absolute -top-[6px] left-1/2 transform -translate-x-1/2"
              size="20"
            >
              <Minus />
            </el-icon>
            <el-icon
              class="absolute -top-[0] left-1/2 transform -translate-x-1/2"
              size="20"
            >
              <Minus />
            </el-icon>
            <el-icon
              class="absolute top-[6px] left-1/2 transform -translate-x-1/2"
              size="20"
            >
              <Minus />
            </el-icon>
          </a>
        </span>

        <a href="https://element-plus.org/en-US/">
          <span class="sr-only">Element Plus</span>
          <img
            src="https://element-plus.org/images/element-plus-logo.svg"
            alt="Element Plus"
            class="block max-w-none w-[120px] h-[28px]"
          />
        </a>
      </div>
      <nav class="hidden w-[400px] lg:block">
        <el-menu :default-active="activeIndex" mode="horizontal" class="h-10">
          <el-menu-item index="1">Guide</el-menu-item>
          <el-menu-item index="2">Component</el-menu-item>
          <el-menu-item index="3">Resource</el-menu-item>
        </el-menu>
      </nav>
    </div>

    <nav
      class="absolute py-4 w-full bg-white text-center lg:hidden dark:bg-[#242424] dark:border-b-gray-900"
      v-if="value"
    >
      <el-menu :default-active="activeIndex" class="border-none">
        <el-menu-item index="1">Guide</el-menu-item>
        <el-menu-item index="2">Component</el-menu-item>
        <el-menu-item index="3">Resource</el-menu-item>
      </el-menu>
    </nav>
  </el-header>
</template>
