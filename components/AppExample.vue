<script setup lang="ts">
import { Collection } from '@element-plus/icons-vue'

const props = defineProps({
  component: {
    type: Object,
    default: () => ({
      name: '',
      code: '',
      title: '',
      type: '',
      author: '',
      dependencies: [],
    }),
  },
})
const mode = ref<'code' | 'preview'>('preview')
const hash = computed(() =>
  props.component.title.toLocaleLowerCase().split(' ').join('-')
)
</script>

<template>
  <el-card
    shadow="never"
    class="mb-[30px]"
    :body-style="{
      padding: 0,
    }"
    :id="hash"
  >
    <template #header>
      <el-row>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="flex items-center">
            <el-popover
              placement="bottom-start"
              :width="210"
              trigger="click"
              :popper-style="{
                padding: '4px',
              }"
            >
              <template #reference>
                <el-button :icon="Collection" circle />
              </template>
              <div v-if="component.dependencies.length > 0">
                <p class="block m-0 p-[10px]">Component dependencies</p>
                <ul class="m-0 p-0 list-none">
                  <li
                    v-for="dependencie in component.dependencies"
                    :key="dependencie"
                  >
                    <a
                      :href="`https://element-plus.org/en-US/component/${dependencie}.html`"
                      class="flex items-center p-[10px] hover:bg-[#f5f7fa] text-[#409eff] decoration-none first-capitalize dark:hover:bg-[#1a1a1a]"
                      target="_blank"
                    >
                      <el-icon size="16">
                        <ElementPlus />
                      </el-icon>
                      <span class="ml-[10px] text-[#333] dark:text-white">
                        {{ dependencie }}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div v-else class="p-[20px] text-center">Not dependencies</div>
            </el-popover>
            <nuxt-link
              :to="{ hash: `#${hash}` }"
              class="m-0 ml-[10px] decoration-none font-600 text-[16px] text-[#333] dark:text-white"
            >
              {{ component.title }}
            </nuxt-link>
          </div>
        </el-col>
        <el-col
          :xs="24"
          :sm="24"
          :md="12"
          :lg="12"
          :xl="12"
          class="flex justify-end"
        >
          <el-radio-group v-model="mode">
            <el-radio-button label="preview">
              <div class="flex">
                <el-icon class="mr-[8px]">
                  <View />
                </el-icon>
                Preview
              </div>
            </el-radio-button>
            <el-radio-button label="code">
              <div class="flex">
                <el-icon class="mr-[8px]">
                  <Edit />
                </el-icon>
                Code
              </div>
            </el-radio-button>
          </el-radio-group>
        </el-col>
      </el-row>
    </template>
    <AppPreview
      v-if="mode === 'preview'"
      :name="component.name"
      :justifyContent="component['justify-content']"
      :alignItems="component['align-items']"
    />
    <AppCode v-else-if="mode === 'code'" :code="component.code" />
  </el-card>
</template>
