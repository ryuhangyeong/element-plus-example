<script setup lang="ts">
import { ref } from 'vue'

const value = ref('Guide')
</script>

<template>
  <el-divider class="divider-with-radio-group">
    <el-radio-group v-model="value" size="large">
      <el-radio-button label="Guide" />
      <el-radio-button label="Component" />
      <el-radio-button label="Resource" />
    </el-radio-group>
  </el-divider>
</template>
