<script setup>
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <el-header
    height="55px"
    class="fixed z-[1000] border-b border-b-solid border-b-gray-200 bg-white px-0 w-full font-semibold dark:bg-[#1a1a1a] dark:border-b-[#1a1a1a] dark:text-white"
  >
    <AppContainer class="flex justify-between items-center h-full">
      <h1 class="m-0 text-base">
        <AppLogo />
      </h1>
      <div class="flex items-center">
        <client-only>
          <a href="#" @click="toggleDark()" class="flex mr-4 cursor-pointer">
            <el-icon v-if="isDark" :size="20" class="dark:text-white">
              <Sunny />
            </el-icon>
            <el-icon v-else :size="20">
              <Moon />
            </el-icon>
          </a>
          <a
            href="https://github.com/ryuhangyeong/element-plus-example"
            :class="isDark ? `text-white` : `text-gray-800`"
            target="_blank"
          >
            <Icon name="uil:github" class="text-2xl" />
          </a>
        </client-only>
      </div>
    </AppContainer>
  </el-header>
</template>
