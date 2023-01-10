<script setup>
const props = defineProps({
  name: {
    type: String,
  },
  justifyContent: {
    type: String,
  },
  alignItems: {
    type: String,
  },
})

const Component = shallowRef('')

// dynamic component
async function init() {
  const component = await import(`@/examples/${props.name}/index.vue`)

  Component.value = component.default
}

init()
</script>

<template>
  <section
    v-if="Component"
    class="flex min-h-[600px] dark:bg-[#1a1a1a]"
    :class="[`justify-${justifyContent}`, `items-${alignItems}`]"
  >
    <Component />
  </section>
  <section v-else class="min-h-[600px]" />
</template>
