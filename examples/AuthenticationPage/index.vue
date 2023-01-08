<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <div class="px-[10px] lg:mx-auto lg:w-[860px] w-full h-full box-border">
    <h2 class="m-0 text-[#868e96] font-300">Welcome back</h2>
    <h2 class="m-0 my-[10px] text-[30px] font-400">Login To Your Account</h2>
    <el-form label-position="top">
      <el-form-item label="Email">
        <el-input size="large" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input size="large" />
      </el-form-item>
      <div class="flex justify-between mb-[10px]">
        <el-checkbox v-model="checked" label="Remember me" size="large" />
        <el-link type="primary">Forgot password?</el-link>
      </div>
      <el-button type="primary" size="large" class="w-full">Sign in</el-button>
    </el-form>
  </div>
</template>
