<script setup>
import { ref } from 'vue'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

const value = ref('guide')
</script>

<template>
  <el-header class="p-0 w-full">
    <div
      class="flex items-center justify-between px-2 mx-auto max-w-5xl lg:px-0"
    >
      <h1>
        <a
          href="https://element-plus.org/en-US/"
          class="block py-5"
          target="_blank"
        >
          <img
            src="https://element-plus.org/images/element-plus-logo.svg"
            alt="Element Plus Logo"
            class="block w-[120px] h-[28px]"
          />
        </a>
      </h1>
    </div>

    <div
      class="relative before:absolute before:top-[39px] before:border:left-0 before:border-b before:border-b-[#e4e7ed] before:w-full before:h-[1px] before:content-empty dark:before:border-b-[#414243]"
    >
      <div class="px-2 mx-auto max-w-5xl lg:px-0">
        <el-tabs v-model="value" type="card">
          <el-tab-pane label="Guide" name="guide">
            <section>
              <h2 class="py-10 font-semibold text-3xl text-[#606266]">
                Design Disciplines
              </h2>
              <el-row :gutter="10">
                <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                  <div
                    class="rounded-md mb-4 py-14 bg-[#fafafa] text-center dark:bg-[#242424]"
                  >
                    <span
                      class="inline-flex items-center justify-center rounded-full bg-[#eff5fd] w-24 h-24 leading-24 dark:bg-[#36393d]"
                    >
                      <el-icon size="60" color="#409eff">
                        <Document />
                      </el-icon>
                    </span>
                    <p class="mt-3">Consistency</p>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                  <div
                    class="rounded-md mb-4 py-14 bg-[#fafafa] text-center dark:bg-[#242424]"
                  >
                    <span
                      class="inline-flex items-center justify-center rounded-full bg-[#eff5fd] w-24 h-24 leading-24 dark:bg-[#36393d]"
                    >
                      <el-icon size="60" color="#409eff">
                        <EditPen />
                      </el-icon>
                    </span>
                    <p class="mt-3">Feedback</p>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                  <div
                    class="rounded-md mb-4 py-14 bg-[#fafafa] text-center dark:bg-[#242424]"
                  >
                    <span
                      class="inline-flex items-center justify-center rounded-full bg-[#eff5fd] w-24 h-24 leading-24 dark:bg-[#36393d]"
                    >
                      <el-icon size="60" color="#409eff">
                        <Tools />
                      </el-icon>
                    </span>
                    <p class="mt-3">Efficiency</p>
                  </div>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
                  <div
                    class="rounded-md mb-4 py-14 bg-[#fafafa] text-center dark:bg-[#242424]"
                  >
                    <span
                      class="inline-flex items-center justify-center rounded-full bg-[#eff5fd] w-24 h-24 leading-24 dark:bg-[#36393d]"
                    >
                      <el-icon size="60" color="#409eff">
                        <Operation />
                      </el-icon>
                    </span>
                    <p class="mt-3">Controllability</p>
                  </div>
                </el-col>
              </el-row>
            </section>
          </el-tab-pane>
          <el-tab-pane label="Component" name="component">
            <section>
              <h2 class="py-10 font-semibold text-3xl text-[#606266]">
                Button
              </h2>
              <p class="my-3">Commonly used button.</p>
              <h3 class="py-6 font-semibold text-3xl text-[#606266]">
                Basic usage
              </h3>
              <div>
                <el-row class="mb-4">
                  <el-button>Default</el-button>
                  <el-button type="primary">Primary</el-button>
                  <el-button type="success">Success</el-button>
                  <el-button type="info">Info</el-button>
                  <el-button type="warning">Warning</el-button>
                  <el-button type="danger">Danger</el-button>
                </el-row>

                <el-row class="mb-4">
                  <el-button plain>Plain</el-button>
                  <el-button type="primary" plain>Primary</el-button>
                  <el-button type="success" plain>Success</el-button>
                  <el-button type="info" plain>Info</el-button>
                  <el-button type="warning" plain>Warning</el-button>
                  <el-button type="danger" plain>Danger</el-button>
                </el-row>

                <el-row class="mb-4">
                  <el-button round>Round</el-button>
                  <el-button type="primary" round>Primary</el-button>
                  <el-button type="success" round>Success</el-button>
                  <el-button type="info" round>Info</el-button>
                  <el-button type="warning" round>Warning</el-button>
                  <el-button type="danger" round>Danger</el-button>
                </el-row>

                <el-row>
                  <el-button :icon="Search" circle />
                  <el-button type="primary" :icon="Edit" circle />
                  <el-button type="success" :icon="Check" circle />
                  <el-button type="info" :icon="Message" circle />
                  <el-button type="warning" :icon="Star" circle />
                  <el-button type="danger" :icon="Delete" circle />
                </el-row>
              </div>
            </section>
          </el-tab-pane>
          <el-tab-pane label="Resource" name="resource">
            <el-row :gutter="10" class="mt-10">
              <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                <el-card shadow="never" class="text-center mb-4">
                  <div class="flex flex-col h-60">
                    <h3
                      class="pb-4 font-semibold text-xl text-gray-700 dark:text-white"
                    >
                      Axure Components
                    </h3>
                    <p class="text-gray-400">
                      By importing Element Plus in Axure, you can easily apply
                      all the components we provide during interaction design.
                    </p>
                    <div class="mt-auto">
                      <el-button type="primary" class="mt-4">
                        Download
                      </el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                <el-card shadow="never" class="text-center mb-4">
                  <div class="flex flex-col h-60">
                    <h3
                      class="pb-4 font-semibold text-xl text-gray-700 dark:text-white"
                    >
                      Sketch Template
                    </h3>
                    <p class="text-gray-400">
                      Newly designed Sketch component library in 2022 with full
                      components for Element Plus to improve design efficiency
                      while keeping a unified visual style.
                    </p>
                    <div class="mt-auto">
                      <el-button type="primary" class="mt-4">
                        Download
                      </el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
              <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                <el-card shadow="never" class="text-center mb-4">
                  <div class="flex flex-col h-60">
                    <h3
                      class="pb-4 font-semibold text-xl text-gray-700 dark:text-white"
                    >
                      Figma Template
                    </h3>
                    <p class="text-gray-400">
                      Newly designed Figma component library in 2022 with new
                      features such as Auto-layout and Variants.
                    </p>
                    <div class="mt-auto">
                      <el-button type="primary" class="mt-4">
                        Download
                      </el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </el-header>
</template>
