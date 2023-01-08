import {
  ElButton,
  ElCard,
  ElCol,
  ElContainer,
  ElFooter,
  ElHeader,
  ElIcon,
  ElInput,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElRow,
  ElLink,
  ElRadio,
  ElRadioGroup,
  ElPopover,
  ElDivider,
  ElPageHeader,
  ElTabs,
  ElEmpty,
  ElCheckbox,
  ElCollapse,
  ElCollapseItem,
  ElForm,
  ElFormItem,
  ElTag,
  ElAvatar,
  ElTooltip,
  ElSwitch,
} from 'element-plus'

import {
  View,
  Check,
  Notebook,
  Document,
  Files,
  Setting,
  CopyDocument,
  ElementPlus,
  Edit,
  Eleme,
  Location,
  Avatar,
  Folder,
  Box,
} from '@element-plus/icons-vue'

const components = {
  ElButton,
  ElCard,
  ElCol,
  ElContainer,
  ElFooter,
  ElHeader,
  ElIcon,
  ElInput,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElRow,
  ElLink,
  ElRadio,
  ElRadioGroup,
  ElPopover,
  ElDivider,
  ElPageHeader,
  ElTabs,
  ElEmpty,
  ElCheckbox,
  ElCollapse,
  ElCollapseItem,
  ElForm,
  ElFormItem,
  ElTag,
  ElAvatar,
  ElTooltip,
  ElSwitch,
}

const icons = {
  View,
  Check,
  Notebook,
  Document,
  Files,
  Setting,
  CopyDocument,
  ElementPlus,
  Edit,
  Eleme,
  Location,
  Avatar,
  Folder,
  Box,
}

export default defineNuxtPlugin((nuxtApp) => {
  for (const [_, component] of Object.entries(components)) {
    nuxtApp.vueApp.use(component)
  }

  for (const [key, icon] of Object.entries(icons)) {
    nuxtApp.vueApp.component(key, icon)
  }

  // https://github.com/element-plus/element-plus/pull/10689/files
  nuxtApp.hook('app:rendered', (ctx) => {
    if (ctx.ssrContext?.teleports) {
      ctx.ssrContext.teleports = renderTeleports(ctx.ssrContext.teleports)
    }
  })
})

function renderTeleports(teleports: Record<string, string>) {
  const body = Object.entries(teleports).reduce((all, [key, value]) => {
    if (key.startsWith('#el-popper-container-')) {
      return `${all}<div id="${key.slice(1)}">${value}</div>`
    }
    return all
  }, teleports.body || '')
  return { body }
}
