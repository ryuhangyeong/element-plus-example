<template>
  <el-card
    shadow="never"
    class="relative w-full max-w-xl"
    :body-style="{ padding: 0 }"
  >
    <img
      src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
      alt="work img"
      class="block"
    />
    <a
      href="#"
      class="absolute top-0 left-0 flex w-full h-full decoration-none text-[#333]"
    >
      <div
        style="
          background-image: linear-gradient(
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.85) 90%
          );
        "
        class="flex flex-col mt-auto p-5 w-full"
      >
        <h2 class="mb-2 text-white text-lg">About refactoring</h2>
        <div class="flex justify-between">
          <span class="text-[#868e96]">ryuhangyeong</span>
          <div class="text-[#868e96] text-sm">
            <div class="flex items-center">
              <el-icon>
                <View />
              </el-icon>
              <span class="ml-3">4529</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </el-card>
</template>
