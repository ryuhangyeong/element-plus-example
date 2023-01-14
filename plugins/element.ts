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
  Minus,
  Close,
  EditPen,
  Tools,
  Operation,
  Expand,
} from '@element-plus/icons-vue'

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
  Minus,
  Close,
  EditPen,
  Tools,
  Operation,
  Expand,
}

export default defineNuxtPlugin((nuxtApp) => {
  for (const [key, icon] of Object.entries(icons)) {
    nuxtApp.vueApp.component(key, icon)
  }
})
