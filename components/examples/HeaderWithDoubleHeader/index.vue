<script setup>
import { Search } from '@element-plus/icons-vue'
import { useToggle } from '@vueuse/core'

const [value, toggle] = useToggle()
const [drawer, drawerToggle] = useToggle()

const input = ref('')
</script>

<template>
  <el-header class="relative w-full h-full p-0">
    <div
      class="px-6 h-full border-b border-solid border-b-[#dcdfe6] dark:border-b-gray-500 dark:bg-[#242424]"
    >
      <div class="flex items-center justify-between h-14">
        <a href="https://element-plus.org/en-US/">
          <span class="sr-only">Element Plus</span>
          <img
            src="https://element-plus.org/images/element-plus-logo.svg"
            alt="Element Plus"
            class="block max-w-none w-[120px] h-[28px]"
          />
        </a>

        <div class="flex items-center">
          <el-input
            v-model="input"
            placeholder="Search"
            :prefix-icon="Search"
            class="hidden lg:flex lg:w-[400px]"
          />
          <span
            class="ml-3 w-5 h-5 bg-white cursor-pointer lg:hidden dark:bg-[#242424]"
            @click="toggle()"
          >
            <a v-if="value">
              <el-icon size="20">
                <Close />
              </el-icon>
            </a>
            <a class="block relative h-full" v-else>
              <el-icon
                class="absolute -top-[6px] left-1/2 transform -translate-x-1/2"
                size="20"
              >
                <Minus />
              </el-icon>
              <el-icon
                class="absolute -top-[0] left-1/2 transform -translate-x-1/2"
                size="20"
              >
                <Minus />
              </el-icon>
              <el-icon
                class="absolute top-[6px] left-1/2 transform -translate-x-1/2"
                size="20"
              >
                <Minus />
              </el-icon>
            </a>
          </span>
        </div>

        <nav class="hidden lg:block">
          <ul class="flex items-center space-x-6">
            <li>
              <el-link
                href="https://element-plus.org/en-US/guide/design.html"
                target="_blank"
              >
                Guide
              </el-link>
            </li>
            <li>
              <el-link
                href="https://element-plus.org/en-US/component/button.html"
                target="_blank"
              >
                Component
              </el-link>
            </li>
            <li>
              <el-link
                href="https://element-plus.org/en-US/resource/index.html"
                target="_blank"
              >
                Resource
              </el-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div
      class="px-6 py-4 border-b border-solid border-b-[#dcdfe6] dark:border-b-gray-500 dark:bg-[#242424]"
    >
      <div
        class="flex items-center cursor-pointer hover:text-[#409eff]"
        @click="drawerToggle()"
      >
        <el-icon :size="20">
          <Expand />
        </el-icon>
        <span class="ml-3">Menu</span>
      </div>
    </div>
    <nav
      class="absolute border-b border-solid border-b-gray-200 py-4 w-full bg-white lg:hidden dark:bg-[#242424] dark:border-b-gray-900"
      v-if="value"
    >
      <ul class="flex flex-col px-6 space-y-5">
        <li>
          <el-link
            href="https://element-plus.org/en-US/guide/design.html"
            target="_blank"
          >
            Guide
          </el-link>
        </li>
        <li>
          <el-link
            href="https://element-plus.org/en-US/component/button.html"
            target="_blank"
          >
            Component
          </el-link>
        </li>
        <li>
          <el-link
            href="https://element-plus.org/en-US/resource/index.html"
            target="_blank"
          >
            Resource
          </el-link>
        </li>
        <li>
          <el-input
            v-model="input"
            placeholder="Search"
            :prefix-icon="Search"
          />
        </li>
      </ul>
    </nav>
  </el-header>
  <el-drawer v-model="drawer" direction="ltr" size="306px">
    <div>
      <p class="mb-6 text-sm">Sponsored by</p>
      <div class="flex flex-col space-y-4">
        <a
          href="https://vform666.com/vform3.html?from=element_plus"
          target="_blank"
        >
          <img
            src="https://element-plus.org/images/vform-banner.png"
            alt="vform"
          />
        </a>
        <a href="https://js.design/?source=element-plus/" target="_blank">
          <img
            src="https://element-plus.org/images/js-design-banner.jpg"
            alt="js-design"
          />
        </a>
      </div>
      <ul class="flex flex-col mt-4 space-y-10">
        <li>
          <p class="font-semibold">Basic</p>
          <ul class="flex flex-col mt-4 pl-4 space-y-2">
            <li>
              <a
                href="https://element-plus.org/en-US/component/button.html"
                target="_blank"
                class="block rounded-lg p-2 pl-4 font-semibold text-sm text-[#409eff] bg-[#409eff] bg-opacity-10 hover:[#409eff]"
              >
                Button
              </a>
            </li>
            <li>
              <a
                href="https://element-plus.org/en-US/component/border.html"
                target="_blank"
                class="block p-2 pl-4 text-sm hover:text-[#409eff]"
              >
                Border
              </a>
            </li>
            <li>
              <a
                href="https://element-plus.org/en-US/component/color.html"
                target="_blank"
                class="block p-2 pl-4 text-sm hover:text-[#409eff]"
              >
                Color
              </a>
            </li>
            <li>
              <a
                href="https://element-plus.org/en-US/component/container.html"
                target="_blank"
                class="block p-2 pl-4 text-sm hover:text-[#409eff]"
              >
                Layout Container
              </a>
            </li>
            <li>
              <a
                href="https://element-plus.org/en-US/component/icon.html"
                target="_blank"
                class="block p-2 pl-4 text-sm hover:text-[#409eff]"
              >
                Icon
              </a>
            </li>
            <li>
              <a
                href="https://element-plus.org/en-US/component/layout.html"
                target="_blank"
                class="block p-2 pl-4 text-sm hover:text-[#409eff]"
              >
                Layout
              </a>
            </li>
            <li>
              <a
                href="https://element-plus.org/en-US/component/link.html"
                target="_blank"
                class="block p-2 pl-4 text-sm hover:text-[#409eff]"
              >
                Link
              </a>
            </li>
            <li>
              <a
                href="https://element-plus.org/en-US/component/scrollbar.html"
                target="_blank"
                class="block p-2 pl-4 text-sm hover:text-[#409eff]"
              >
                Scrollbar
              </a>
            </li>
            <li>
              <a
                href="https://element-plus.org/en-US/component/space.html"
                target="_blank"
                class="block p-2 pl-4 text-sm hover:text-[#409eff]"
              >
                Space
              </a>
            </li>
            <li>
              <a
                href="https://element-plus.org/en-US/component/typography.html"
                target="_blank"
                class="block p-2 pl-4 text-sm hover:text-[#409eff]"
              >
                Typography
              </a>
            </li>
          </ul>
        </li>
        <li>
          <p class="font-semibold">Configuration</p>
          <ul class="flex flex-col mt-4 pl-6 space-y-4">
            <li>
              <a
                href="https://element-plus.org/en-US/component/config-provider.html"
                target="_blank"
                class="block p-2 pl-4 text-sm hover:text-[#409eff]"
              >
                Config Provider
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </el-drawer>
</template>
