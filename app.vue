<script setup>
import { ID_INJECTION_KEY } from 'element-plus'

import 'prismjs/themes/prism-okaidia.css'

provide(ID_INJECTION_KEY, {
  prefix: 1024,
  current: 0,
})
</script>

<template>
  <NuxtLayout />
  <div class="pt-[55px]">
    <NuxtPage />
  </div>
</template>
