<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('First')
</script>

<template>
  <el-card
    shadow="never"
    class="m-[10px] w-full sm:w-[640px]"
    :body-style="{ padding: 0 }"
  >
    <ul class="m-0 p-0 list-none">
      <li>
        <div class="p-[10px]">
          <el-radio label="First" v-model="radio" />
          <p class="m-0 ml-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <el-divider class="m-0" />
      </li>
      <li>
        <div class="p-[10px]">
          <el-radio label="Second" v-model="radio" />
          <p class="m-0 ml-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <el-divider class="m-0" />
      </li>
      <li>
        <div class="p-[10px]">
          <el-radio label="Third" v-model="radio" />
          <p class="m-0 ml-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </li>
    </ul>
  </el-card>
</template>
