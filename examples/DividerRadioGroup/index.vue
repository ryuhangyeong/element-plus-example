<script setup lang="ts">
import { ref } from 'vue'

const value = ref('New York')
</script>

<template>
  <el-divider>
    <el-radio-group v-model="value" size="large" class="p-0">
      <el-radio-button label="New York" />
      <el-radio-button label="Washington" />
      <el-radio-button label="Los Angeles" />
      <el-radio-button label="Chicago" />
    </el-radio-group>
  </el-divider>
</template>
