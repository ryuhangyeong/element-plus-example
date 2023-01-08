<template>
  <el-card
    shadow="never"
    class="relative w-full sm:w-[360px]"
    :body-style="{ padding: 0 }"
  >
    <header class="relative">
      <img
        src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
        class="block w-full h-[240px] pointer-events-none"
      />
      <div>
        <el-avatar
          src="https://avatars.githubusercontent.com/u/27342882?v=4"
          :size="80"
          class="absolute bottom-[-40px] left-[50%] transform -translate-x-1/2"
        />
      </div>
    </header>
    <div>
      <div class="text-center">
        <div class="mt-[50px] mb-[30px]">
          <p href="https://github.com/ryuhangyeong" class="m-0 text-[24px]">
            ryuhangyeong
          </p>
          <p class="m-0 text-[#868e96]">frontend engineer</p>
        </div>
        <el-row :gutter="10">
          <el-col :span="8">
            <div>
              <span class="font-600">44</span>
              <p class="m-0 text-[#868e96] text-[14px]">Followers</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <span class="font-600">25</span>
              <p class="m-0 text-[#868e96] text-[14px]">Following</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <span class="font-600">2</span>
              <p class="m-0 text-[#868e96] text-[14px]">Sponsoring</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <footer class="p-[20px]">
      <el-button type="primary" class="w-full">Subscribe</el-button>
    </footer>
  </el-card>
</template>
