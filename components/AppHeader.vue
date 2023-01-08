<script setup>
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <el-header
    height="55px"
    class="fixed z-[1000] border-b border-b-[#dcdfe6] border-b-solid bg-white px-0 w-full dark:bg-[#1a1a1a] dark:border-b-[#242424]"
  >
    <AppContainer class="flex justify-between items-center h-full">
      <h1 class="m-0 text-[16px]">
        <AppLogo />
      </h1>
      <div class="flex items-center">
        <client-only>
          <div @click="toggleDark()" class="flex cursor-pointer mr-[10px]">
            <el-icon v-if="isDark" :size="18" class="dark:text-white">
              <Sunny />
            </el-icon>
            <el-icon v-else :size="18">
              <Moon />
            </el-icon>
          </div>
          <a
            href="https://github.com/ryuhangyeong/element-plus-example"
            :class="isDark ? `text-white` : `text-[#333]`"
            target="_blank"
          >
            <Icon name="uil:github" class="text-[26px]" />
          </a>
        </client-only>
      </div>
    </AppContainer>
  </el-header>
</template>
