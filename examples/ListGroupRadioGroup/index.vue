<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('First')
</script>

<template>
  <div class="m-[10px] w-full sm:w-[640px]">
    <el-radio-group v-model="radio" class="w-full">
      <el-radio label="First" size="large" border class="w-full mr-0">
        First
      </el-radio>
      <el-radio label="Second" size="large" border class="mt-[6px] mr-0 w-full">
        Second
      </el-radio>
      <el-radio label="Third" size="large" border class="mt-[6px] mr-0 w-full">
        Third
      </el-radio>
      <el-radio label="Four" size="large" border class="mt-[6px] w-full">
        Four
      </el-radio>
    </el-radio-group>
  </div>
</template>
