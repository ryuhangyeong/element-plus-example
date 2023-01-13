<template>
  <el-footer class="p-0 w-full">
    <el-divider class="m-0 mt-4" />
    <div class="px-2 py-6 mx-auto max-w-5xl lg:px-0 overflow-hidden">
      <div class="flex flex-col justify-between lg:flex-row">
        <a
          href="https://element-plus.org/en-US/"
          target="_blank"
          class="mb-10 lg:mb-0"
        >
          <img
            src="https://element-plus.org/images/element-plus-logo.svg"
            alt="Element Plus"
            class="block w-[120px] h-[28px]"
          />
        </a>
        <div>
          <el-row :gutter="100">
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
              <div class="mb-5 lg:mb-0">
                <p class="mb-3">Links</p>
                <ul class="flex flex-col space-y-1">
                  <li>
                    <a
                      href="https://github.com/element-plus/element-plus"
                      target="_blank"
                      class="text-sm text-[#606266]"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://element-plus.gitee.io/en-US/?_gl=1*1dkdr2e*_ga*NTI1NDIyMzU4LjE2NzI0NjYwNjc.*_ga_M74ZHEQ1M1*MTY3MzU5MTA1MS4yOS4xLjE2NzM1OTE2MzcuMC4wLjA."
                      target="_blank"
                      class="text-sm text-[#606266]"
                    >
                      China Mirror 🇨🇳
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/element-plus/element-plus/releases"
                      target="_blank"
                      class="text-sm text-[#606266]"
                    >
                      Changelog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://element.eleme.io/#/en-US"
                      target="_blank"
                      class="text-sm text-[#606266]"
                    >
                      Element UI for Vue 2
                    </a>
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
              <div class="mb-5 lg:mb-0">
                <p class="mb-3">Community</p>
                <ul class="flex flex-col space-y-1">
                  <li>
                    <a
                      href="https://discord.link/ElementPlus"
                      target="_blank"
                      class="text-sm text-[#606266]"
                    >
                      Discord
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/element-plus/element-plus/issues"
                      target="_blank"
                      class="text-sm text-[#606266]"
                    >
                      Feedback
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/element-plus/element-plus/blob/dev/.github/CONTRIBUTING.en-US.md"
                      target="_blank"
                      class="text-sm text-[#606266]"
                    >
                      Contribution
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://segmentfault.com/t/element-plus"
                      target="_blank"
                      class="text-sm text-[#606266]"
                    >
                      SegmentFault
                    </a>
                  </li>
                </ul>
              </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
              <div class="mb-5 lg:mb-0">
                <p class="mb-3">Resources</p>
                <ul class="flex flex-col space-y-1">
                  <li>
                    <a
                      href="https://element-plus.org/en-US/resource/index.html"
                      target="_blank"
                      class="text-sm text-[#606266]"
                    >
                      Axure Components
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://element-plus.org/en-US/resource/index.html"
                      target="_blank"
                      class="text-sm text-[#606266]"
                    >
                      Sketch Template
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://element-plus.org/en-US/resource/index.html"
                      target="_blank"
                      class="text-sm text-[#606266]"
                    >
                      Figma Template
                    </a>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </el-footer>
</template>
