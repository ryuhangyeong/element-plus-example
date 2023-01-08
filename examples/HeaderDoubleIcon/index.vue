<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const input = ref('')
</script>

<template>
  <el-header class="p-0 w-full">
    <div
      class="px-[10px] lg:mx-auto lg:w-[1024px] bg-[#f8f9fa] w-full h-full box-border dark:bg-[#242424]"
    >
      <div class="flex items-center justify-between w-full h-full">
        <h1>
          <a href="#">
            <img
              src="https://element-plus.org/images/element-plus-logo.svg"
              alt="Element Plus Logo"
              class="block w-[120px] h-[28px]"
            />
          </a>
        </h1>
        <nav>
          <ul class="flex gap-[20px] m-0 p-0 list-none">
            <li>
              <el-link href="#" class="flex">
                <span class="block text-center">
                  <el-icon :size="20">
                    <Document />
                  </el-icon>
                  <span class="block">Guide</span>
                </span>
              </el-link>
            </li>
            <li>
              <el-link href="#" class="flex">
                <span class="block text-center">
                  <el-icon :size="20">
                    <Folder />
                  </el-icon>
                  <span class="block">Component</span>
                </span>
              </el-link>
            </li>
            <li>
              <el-link href="#" class="flex">
                <span class="block text-center">
                  <el-icon :size="20">
                    <Box />
                  </el-icon>
                  <span class="block">Resource</span>
                </span>
              </el-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="px-[10px] lg:mx-auto lg:w-[1024px] w-full h-full box-border">
      <div class="flex items-center justify-between w-full h-full">
        <div>
          <el-input
            v-model="input"
            placeholder="Search"
            :prefix-icon="Search"
          />
        </div>
        <nav class="flex gap-[10px]">
          <el-link type="primary">Log in</el-link>
          <el-link>Sign up</el-link>
        </nav>
      </div>
    </div>
    <el-divider class="m-0" />
  </el-header>
</template>
