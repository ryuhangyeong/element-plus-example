<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
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
          <el-checkbox label="First" v-model="checked1" />
          <p class="m-0 ml-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <el-divider class="m-0" />
      </li>
      <li>
        <div class="p-[10px]">
          <el-checkbox label="Second" v-model="checked2" />
          <p class="m-0 ml-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <el-divider class="m-0" />
      </li>
      <li>
        <div class="p-[10px]">
          <el-checkbox label="Third" v-model="checked3" />
          <p class="m-0 ml-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </li>
    </ul>
  </el-card>
</template>
