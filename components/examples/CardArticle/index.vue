<template>
  <div class="overflow-hidden">
    <el-card
      shadow="never"
      class="m-2 w-full max-w-xl"
      :body-style="{ padding: 0 }"
    >
      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
        alt="code img"
        class="w-full"
      />
      <div class="p-5">
        <div class="flex space-x-2">
          <el-tag>HTML</el-tag>
          <el-tag>CSS</el-tag>
          <el-tag>Javascript</el-tag>
        </div>
        <header>
          <h2 class="my-5">How to become a front-end developer</h2>
          <p class="mb-5">
            If you want to become a frontend developer, this post will help you.
          </p>
        </header>
        <footer class="flex items-center justify-between">
          <div class="flex">
            <el-avatar
              src="https://avatars.githubusercontent.com/u/27342882?v=4"
              :size="40"
            />
            <div class="ml-2 text-sm">
              <a
                href="https://github.com/ryuhangyeong"
                class="inline-block decoration-none text-[#868e96]"
                target="_blank"
              >
                ryuhangyeong
              </a>
              <p>February 19, 2022</p>
            </div>
          </div>
          <div>
            <el-link
              href="https://github.com/ryuhangyeong"
              type="primary"
              target="_blank"
            >
              Read more
            </el-link>
          </div>
        </footer>
      </div>
    </el-card>
  </div>
</template>
