<template>
  <el-card
    shadow="never"
    :body-style="{
      padding: '30px',
      overflow: 'hidden',
    }"
    class="relative m-[10px] w-full sm:w-[460px] overflow-initial"
  >
    <h2 class="m-0 mb-[20px]">Ryuhangyeong</h2>
    <p class="m-0 text-[#868e96]">
      Front-end developer and open source enthusiast. We hope to develop a UI
      platform that can help many people in the future. I still working hard to
      make this dream come true.
    </p>
    <div class="absolute top-[-40px] right-[20px]">
      <el-avatar
        src="https://avatars.githubusercontent.com/u/27342882?v=4"
        :size="80"
      />
    </div>
    <footer class="mt-[10px] text-right">
      <el-link href="#" type="primary">Read more</el-link>
    </footer>
  </el-card>
</template>
