<template>
  <div>
    <a
      href="#"
      class="flex items-center justify-center border-r border-r-[#dcdfe6] border-r-solid h-[60px] box-border dark:border-r-[#4C4D4F]"
    >
      <img
        src="https://avatars.githubusercontent.com/u/68583457?s=200&v=4"
        alt="Element Plus Logo"
        class="block h-[28px]"
      />
    </a>
    <!-- this component requires the <client-only></client-only> wrap when used in SSR (eg: Nuxt) and SSG (eg: VitePress). -->
    <client-only>
      <el-menu default-active="2" class="h-full" :collapse="true">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title>
              <span>Group One</span>
            </template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon>
            <Files />
          </el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon>
            <Document />
          </el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <Setting />
          </el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon>
            <Check />
          </el-icon>
          <template #title>Navigator Five</template>
        </el-menu-item>
      </el-menu>
    </client-only>
  </div>
</template>
