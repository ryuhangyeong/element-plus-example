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
    class="mb-8"
    :body-style="{
      padding: 0,
    }"
    :id="hash"
  >
    <template #header>
      <el-row>
        <el-col :sm="24" :md="12">
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
                <p class="block p-3">Component dependencies</p>
                <ul>
                  <li
                    v-for="dependencie in component.dependencies"
                    :key="dependencie"
                  >
                    <a
                      :href="`https://element-plus.org/en-US/component/${dependencie}.html`"
                      class="flex items-center p-3 text-[#409eff] hover:bg-gray-100 dark:hover:bg-gray-600"
                      target="_blank"
                    >
                      <el-icon size="16">
                        <ElementPlus />
                      </el-icon>
                      <span class="ml-3 text-gray-900 dark:text-white">
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
              class="ml-2 text-base text-gray-900 dark:text-white"
            >
              {{ component.title }}
            </nuxt-link>
          </div>
        </el-col>
        <el-col :sm="24" :md="12" class="flex justify-end">
          <el-radio-group v-model="mode">
            <el-radio-button label="preview">
              <div class="flex">
                <el-icon class="mr-2">
                  <View />
                </el-icon>
                Preview
              </div>
            </el-radio-button>
            <el-radio-button label="code">
              <div class="flex">
                <el-icon class="mr-2">
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
