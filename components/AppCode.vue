<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const props = defineProps({
  code: {
    type: String,
    default: '',
  },
})

const code = ref(props.code)

const { copy, copied } = useClipboard({ source: code })

const copyCode = () => {
  copy(code.value)
}
</script>

<template>
  <section class="relative">
    <div v-html="highlight(code, 'vue')" />
    <el-tooltip :content="copied ? 'Copied!' : 'Copy code'">
      <el-icon
        class="absolute top-3 right-3 text-gray-500 hover:text-gray-400 cursor-pointer dark:hover:text-white"
        @click="copyCode"
      >
        <CopyDocument />
      </el-icon>
    </el-tooltip>
  </section>
</template>
