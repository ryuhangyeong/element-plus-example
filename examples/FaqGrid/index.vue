<script lang="ts" setup>
import { ref } from 'vue'

const activeNames = ref(['First'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<template>
  <div class="px-[10px] lg:mx-auto lg:w-[1024px] w-full h-full box-border">
    <h2 class="m-0">FAQ's</h2>
    <el-collapse v-model="activeNames" @change="handleChange" class="mt-[40px]">
      <el-collapse-item title="First" name="First">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia
          nisi provident maxime et magni hic voluptatum minus mollitia delectus
          necessitatibus, est porro laborum recusandae quas reprehenderit
          repellendus excepturi quis.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Second" name="Second">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia
          nisi provident maxime et magni hic voluptatum minus mollitia delectus
          necessitatibus, est porro laborum recusandae quas reprehenderit
          repellendus excepturi quis.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Third" name="Third">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia
          nisi provident maxime et magni hic voluptatum minus mollitia delectus
          necessitatibus, est porro laborum recusandae quas reprehenderit
          repellendus excepturi quis.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Fours" name="Fours">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia
          nisi provident maxime et magni hic voluptatum minus mollitia delectus
          necessitatibus, est porro laborum recusandae quas reprehenderit
          repellendus excepturi quis.
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
