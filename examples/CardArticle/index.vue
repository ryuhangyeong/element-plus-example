<template>
  <el-card
    shadow="never"
    class="m-[10px] w-full sm:w-[640px]"
    :body-style="{ padding: 0 }"
  >
    <img
      src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
      alt="code img"
      class="w-full h-[360px]"
    />
    <div class="p-[20px]">
      <div class="flex gap-[10px]">
        <el-tag>HTML</el-tag>
        <el-tag>CSS</el-tag>
        <el-tag>Javascript</el-tag>
      </div>
      <header>
        <h2 class="m-0 my-[20px]">How to become a front-end developer</h2>
        <p class="m-0 mb-[20px]">
          If you want to become a frontend developer, this post will help you.
        </p>
      </header>
      <footer class="flex items-center justify-between">
        <div class="flex">
          <el-avatar
            src="https://avatars.githubusercontent.com/u/27342882?v=4"
            :size="40"
          />
          <div class="ml-[10px] text-[14px]">
            <a
              href="https://github.com/ryuhangyeong"
              class="inline-block decoration-none text-[#868e96]"
            >
              ryuhangyeong
            </a>
            <p class="m-0">February 19, 2022</p>
          </div>
        </div>
        <div>
          <el-link href="#" type="primary">Read more</el-link>
        </div>
      </footer>
    </div>
  </el-card>
</template>
