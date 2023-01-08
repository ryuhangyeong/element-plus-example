<template>
  <div
    class="pricing px-[10px] lg:mx-auto lg:w-[1024px] w-full h-full box-border text-center"
  >
    <h2 class="m-0 text-[52px]">Pricing</h2>
    <p class="m-0 text-[#868e96]">
      Build a website fast with Element Plus examples
    </p>
    <el-row :gutter="30" class="mt-[30px]">
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="mb-[20px]">
        <el-card shadow="never">
          <template #header>
            <span>Free</span>
          </template>
          <div>
            <h3 class="m-0 mb-[20px] font-400 text-[32px]">
              <span>$0/</span>
              <span class="text-[#868e96] text-[26px]">mo</span>
            </h3>
            <ul class="m-0 p-0 list-none">
              <li>10 users</li>
              <li class="mt-[6px]">technical support</li>
              <li class="mt-[6px]">2 GB of storage</li>
            </ul>
            <el-button plain class="mt-[20px] py-[20px] w-full">
              Get started
            </el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="mb-[20px]">
        <el-card shadow="never">
          <template #header>
            <span>Pro</span>
          </template>
          <div>
            <h3 class="m-0 mb-[20px] font-400 text-[32px]">
              <span>$15/</span>
              <span class="text-[#868e96] text-[26px]">mo</span>
            </h3>
            <ul class="m-0 p-0 list-none">
              <li>20 users</li>
              <li class="mt-[6px]">technical support</li>
              <li class="mt-[6px]">10 GB of storage</li>
            </ul>
            <el-button type="primary" plain class="mt-[20px] py-[20px] w-full">
              Get started
            </el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="mb-[20px]">
        <el-card shadow="never" style="--el-card-border-color: #409eff">
          <template #header>
            <span class="font-600 text-[#409eff]">Enterprise</span>
          </template>
          <div>
            <h3 class="m-0 mb-[20px] font-400 text-[32px]">
              <span>$29/</span>
              <span class="text-[#868e96] text-[26px]">mo</span>
            </h3>
            <ul class="m-0 p-0 list-none">
              <li>30 users</li>
              <li class="mt-[6px]">technical support</li>
              <li class="mt-[6px]">15 GB of storage</li>
            </ul>
            <el-button type="primary" plain class="mt-[20px] py-[20px] w-full">
              Contact us
            </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
