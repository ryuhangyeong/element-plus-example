<template>
  <div class="pricing px-2 lg:mx-auto max-w-5xl w-full text-center">
    <h2 class="text-6xl">Pricing</h2>
    <p class="my-6 text-[#868e96]">
      Build a website fast with Element Plus examples
    </p>
    <el-row :gutter="30">
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="mb-5">
        <el-card shadow="never">
          <template #header>
            <span>Free</span>
          </template>
          <div>
            <h3 class="mb-5 font-normal text-4xl">
              <span>$0/</span>
              <span class="text-[#868e96] text-2xl">mo</span>
            </h3>
            <ul class="flex flex-col space-y-3">
              <li>3 users</li>
              <li>technical support</li>
              <li>2 GB of storage</li>
            </ul>
            <el-button plain class="mt-5 py-5 w-full"> Get started </el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="mb-5">
        <el-card shadow="never">
          <template #header>
            <span>Pro</span>
          </template>
          <div>
            <h3 class="mb-5 font-normal text-4xl">
              <span>$10/</span>
              <span class="text-[#868e96] text-2xl">mo</span>
            </h3>
            <ul class="flex flex-col space-y-3">
              <li>10 users</li>
              <li>technical support</li>
              <li>10 GB of storage</li>
            </ul>
            <el-button plain class="mt-5 py-5 w-full"> Get started </el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="mb-5">
        <el-card shadow="never" style="--el-card-border-color: #409eff">
          <template #header>
            <span class="font-semibold text-[#409eff]">Enterprise</span>
          </template>
          <div>
            <h3 class="mb-5 font-normal text-4xl">
              <span>$50/</span>
              <span class="text-[#868e96] text-2xl">mo</span>
            </h3>
            <ul class="flex flex-col space-y-3">
              <li>100 users</li>
              <li>technical support</li>
              <li>100 GB of storage</li>
            </ul>
            <el-button type="primary" class="mt-5 py-5 w-full">
              Get started
            </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
