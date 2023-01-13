<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <el-card shadow="never" class="w-full max-w-md" :body-style="{ padding: 20 }">
    <div class="m-8 text-center">
      <el-link
        href="https://element-plus.org/en-US/"
        :underline="false"
        class="m-0"
      >
        <img
          src="https://element-plus.org/images/element-plus-logo.svg"
          class="block w-[120px] h-[28px]"
          alt="Element Plus"
        />
      </el-link>
      <h2 class="my-3">Log in</h2>
      <p class="text-[#868e96]">
        Don't have an account?
        <el-link type="primary">Sign up</el-link>
      </p>
    </div>
    <el-form label-position="top">
      <el-form-item label="Email">
        <el-input size="large" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input size="large" />
      </el-form-item>
      <div class="flex justify-between mb-2">
        <el-checkbox v-model="checked" label="Remember me" size="large" />
        <el-link type="primary">Forgot password?</el-link>
      </div>
      <el-button type="primary" size="large" class="w-full">Sign in</el-button>
    </el-form>
  </el-card>
</template>
