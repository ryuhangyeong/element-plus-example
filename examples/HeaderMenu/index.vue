<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-header class="p-0 w-full">
    <div class="px-[10px] lg:mx-auto lg:w-[1024px] w-full h-full box-border">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item index="0">
          <h1>
            <a href="#">
              <img
                src="https://element-plus.org/images/element-plus-logo.svg"
                alt="Element Plus Logo"
                class="block w-[120px] h-[28px]"
              />
            </a>
          </h1>
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-sub-menu index="2">
          <template #title>Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3" disabled>Info</el-menu-item>
        <el-menu-item index="4">Orders</el-menu-item>
      </el-menu>
    </div>
  </el-header>
</template>
