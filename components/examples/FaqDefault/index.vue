<template>
  <div class="p-4 max-w-5xl w-full lg:p-0">
    <el-row>
      <el-col :xs="24" :md="8">
        <a href="https://element-plus.org/en-US/">
          <span class="sr-only">Element Plus</span>
          <img
            src="https://element-plus.org/images/element-plus-logo.svg"
            alt="Element Plus"
            class="block max-w-none w-[120px] h-[28px]"
          />
        </a>
        <p class="my-3 text-3xl font-semibold">FAQs</p>
      </el-col>
      <el-col :xs="24" :md="16">
        <el-collapse accordion>
          <el-collapse-item name="1">
            <template #title>
              <p class="text-base">How to use dark mode?</p>
            </template>
            <div>
              <el-link
                href="https://element-plus.org/en-US/guide/dark-mode.html#how-to-enable-it"
                target="_blank"
              >
                https://element-plus.org/en-US/guide/dark-mode.html#how-to-enable-it
              </el-link>
            </div>
          </el-collapse-item>
          <el-collapse-item name="2">
            <template #title>
              <p class="text-base">How to specify a custom theme?</p>
            </template>
            <div>
              <el-link
                href="https://element-plus.org/en-US/guide/theming.html"
                target="_blank"
              >
                https://element-plus.org/en-US/guide/theming.html
              </el-link>
            </div>
          </el-collapse-item>
          <el-collapse-item name="3">
            <template #title>
              <p class="text-base">How to support internationalization?</p>
            </template>
            <div>
              <el-link
                href="https://element-plus.org/en-US/guide/i18n.html"
                target="_blank"
              >
                https://element-plus.org/en-US/guide/i18n.html
              </el-link>
            </div>
          </el-collapse-item>
          <el-collapse-item name="4">
            <template #title>
              <p class="text-base">How to set global configuration?</p>
            </template>
            <div>
              <el-link
                href="https://element-plus.org/en-US/component/config-provider.html"
                target="_blank"
              >
                https://element-plus.org/en-US/component/config-provider.html
              </el-link>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-col>
    </el-row>
  </div>
</template>
