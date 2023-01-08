<script setup lang="ts">
import { ref } from 'vue'

const value = ref('first')
</script>

<template>
  <el-header class="p-0 w-full">
    <div class="px-[10px] lg:mx-auto lg:w-[1024px] w-full h-full box-border">
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
        <nav class="flex gap-[10px]">
          <el-link type="primary">Guide</el-link>
          <el-link>Component</el-link>
          <el-link>Resource</el-link>
        </nav>
      </div>
    </div>

    <div
      class="relative before:absolute before:top-[39px] before:border:left-0 before:border-b before:border-b-[#e4e7ed] before:border-b-solid before:w-full before:h-[1px] before:content-empty dark:before:border-b-[#414243]"
    >
      <div class="px-[10px] lg:mx-auto lg:w-[1024px] w-full h-full box-border">
        <el-tabs v-model="value" type="card">
          <el-tab-pane label="User" name="first">User</el-tab-pane>
          <el-tab-pane label="Config" name="second">Config</el-tab-pane>
          <el-tab-pane label="Role" name="third">Role</el-tab-pane>
          <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </el-header>
</template>
