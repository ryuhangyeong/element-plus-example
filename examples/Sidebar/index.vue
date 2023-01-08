<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const input = ref('')
</script>

<template>
  <div>
    <header
      class="px-[10px] border-r border-r-[#dcdfe6] border-r-solid dark:border-r-[#4C4D4F]"
    >
      <h2 class="m-0 py-[20px]">
        <a href="#">
          <img
            src="https://element-plus.org/images/element-plus-logo.svg"
            alt="Element Plus Logo"
            class="block w-[120px] h-[28px]"
          />
        </a>
      </h2>
      <el-input
        v-model="input"
        class="w-full mb-[10px]"
        placeholder="Search"
        :suffix-icon="Search"
      />
    </header>
    <!-- this component requires the <client-only></client-only> wrap when used in SSR (eg: Nuxt) and SSG (eg: VitePress). -->
    <client-only>
      <el-menu default-active="2" class="w-[400px] h-full">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <Document />
            </el-icon>
            <span>Component</span>
          </template>
          <el-menu-item-group title="Form">
            <el-menu-item index="1-1">Autocomplete</el-menu-item>
            <el-menu-item index="1-2">Cascader</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Data">
            <el-menu-item index="1-3">Avatar</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon>
            <Files />
          </el-icon>
          <span>Resource</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon>
            <Document />
          </el-icon>
          <span>Guide</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <Setting />
          </el-icon>
          <span>Community</span>
        </el-menu-item>
      </el-menu>
    </client-only>
  </div>
</template>
