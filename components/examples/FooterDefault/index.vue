<script setup>
const today = new Date()
const year = today.getFullYear()
</script>

<template>
  <el-footer class="p-0 w-full">
    <el-divider class="m-0 mt-4" />
    <div class="px-2 py-6 mx-auto max-w-5xl h-full lg:px-0">
      <div
        class="flex items-center justify-between w-full h-full flex-col lg:flex-row"
      >
        <div class="flex items-center">
          <a href="https://element-plus.org/en-US/" target="_blank">
            <img
              src="https://element-plus.org/images/element-plus-logo.svg"
              alt="Element Plus"
              class="block w-[120px] h-[28px]"
            />
          </a>
          <p class="ml-2 text-[#606266] text-[14px]">© {{ year }}</p>
        </div>
        <nav class="flex mt-4 space-x-6 lg:mt-0">
          <el-link type="primary">Guide</el-link>
          <el-link>Component</el-link>
          <el-link>Resource</el-link>
        </nav>
      </div>
    </div>
  </el-footer>
</template>
