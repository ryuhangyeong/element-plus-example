export default (function(a,b,c,d){return {data:{"5dEHHReFWF":[{name:b,code:"\u003Cscript setup lang=\"ts\"\u003E\nimport { ref } from 'vue'\nimport { Search } from '@element-plus\u002Ficons-vue'\n\nconst input = ref('')\n\u003C\u002Fscript\u003E\n\n\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003Cheader\n      class=\"px-[10px] border-r border-r-[#dcdfe6] border-r-solid dark:border-r-[#4C4D4F]\"\n    \u003E\n      \u003Ch2 class=\"m-0 py-[20px]\"\u003E\n        \u003Ca href=\"#\"\u003E\n          \u003Cimg\n            src=\"https:\u002F\u002Felement-plus.org\u002Fimages\u002Felement-plus-logo.svg\"\n            alt=\"Element Plus Logo\"\n            class=\"block w-[120px] h-[28px]\"\n          \u002F\u003E\n        \u003C\u002Fa\u003E\n      \u003C\u002Fh2\u003E\n      \u003Cel-input\n        v-model=\"input\"\n        class=\"w-full mb-[10px]\"\n        placeholder=\"Search\"\n        :suffix-icon=\"Search\"\n      \u002F\u003E\n    \u003C\u002Fheader\u003E\n    \u003C!-- this component requires the \u003Cclient-only\u003E\u003C\u002Fclient-only\u003E wrap when used in SSR (eg: Nuxt) and SSG (eg: VitePress). --\u003E\n    \u003Cclient-only\u003E\n      \u003Cel-menu default-active=\"2\" class=\"w-[400px] h-full\"\u003E\n        \u003Cel-sub-menu index=\"1\"\u003E\n          \u003Ctemplate #title\u003E\n            \u003Cel-icon\u003E\n              \u003CDocument \u002F\u003E\n            \u003C\u002Fel-icon\u003E\n            \u003Cspan\u003EComponent\u003C\u002Fspan\u003E\n          \u003C\u002Ftemplate\u003E\n          \u003Cel-menu-item-group title=\"Form\"\u003E\n            \u003Cel-menu-item index=\"1-1\"\u003EAutocomplete\u003C\u002Fel-menu-item\u003E\n            \u003Cel-menu-item index=\"1-2\"\u003ECascader\u003C\u002Fel-menu-item\u003E\n          \u003C\u002Fel-menu-item-group\u003E\n          \u003Cel-menu-item-group title=\"Data\"\u003E\n            \u003Cel-menu-item index=\"1-3\"\u003EAvatar\u003C\u002Fel-menu-item\u003E\n          \u003C\u002Fel-menu-item-group\u003E\n        \u003C\u002Fel-sub-menu\u003E\n        \u003Cel-menu-item index=\"2\"\u003E\n          \u003Cel-icon\u003E\n            \u003CFiles \u002F\u003E\n          \u003C\u002Fel-icon\u003E\n          \u003Cspan\u003EResource\u003C\u002Fspan\u003E\n        \u003C\u002Fel-menu-item\u003E\n        \u003Cel-menu-item index=\"3\" disabled\u003E\n          \u003Cel-icon\u003E\n            \u003CDocument \u002F\u003E\n          \u003C\u002Fel-icon\u003E\n          \u003Cspan\u003EGuide\u003C\u002Fspan\u003E\n        \u003C\u002Fel-menu-item\u003E\n        \u003Cel-menu-item index=\"4\"\u003E\n          \u003Cel-icon\u003E\n            \u003CSetting \u002F\u003E\n          \u003C\u002Fel-icon\u003E\n          \u003Cspan\u003ECommunity\u003C\u002Fspan\u003E\n        \u003C\u002Fel-menu-item\u003E\n      \u003C\u002Fel-menu\u003E\n    \u003C\u002Fclient-only\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n",title:b,type:c,author:d,dependencies:["icon","input","menu"],"justify-content":a,"align-items":a},{name:"SidebarTooltip",code:"\u003Ctemplate\u003E\n  \u003Cdiv\u003E\n    \u003Ca\n      href=\"#\"\n      class=\"flex items-center justify-center border-r border-r-[#dcdfe6] border-r-solid h-[60px] box-border dark:border-r-[#4C4D4F]\"\n    \u003E\n      \u003Cimg\n        src=\"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F68583457?s=200&v=4\"\n        alt=\"Element Plus Logo\"\n        class=\"block h-[28px]\"\n      \u002F\u003E\n    \u003C\u002Fa\u003E\n    \u003C!-- this component requires the \u003Cclient-only\u003E\u003C\u002Fclient-only\u003E wrap when used in SSR (eg: Nuxt) and SSG (eg: VitePress). --\u003E\n    \u003Cclient-only\u003E\n      \u003Cel-menu default-active=\"2\" class=\"h-full\" :collapse=\"true\"\u003E\n        \u003Cel-sub-menu index=\"1\"\u003E\n          \u003Ctemplate #title\u003E\n            \u003Cel-icon\u003E\n              \u003Clocation \u002F\u003E\n            \u003C\u002Fel-icon\u003E\n            \u003Cspan\u003ENavigator One\u003C\u002Fspan\u003E\n          \u003C\u002Ftemplate\u003E\n          \u003Cel-menu-item-group\u003E\n            \u003Ctemplate #title\u003E\n              \u003Cspan\u003EGroup One\u003C\u002Fspan\u003E\n            \u003C\u002Ftemplate\u003E\n            \u003Cel-menu-item index=\"1-1\"\u003Eitem one\u003C\u002Fel-menu-item\u003E\n            \u003Cel-menu-item index=\"1-2\"\u003Eitem two\u003C\u002Fel-menu-item\u003E\n          \u003C\u002Fel-menu-item-group\u003E\n          \u003Cel-menu-item-group title=\"Group Two\"\u003E\n            \u003Cel-menu-item index=\"1-3\"\u003Eitem three\u003C\u002Fel-menu-item\u003E\n          \u003C\u002Fel-menu-item-group\u003E\n          \u003Cel-sub-menu index=\"1-4\"\u003E\n            \u003Ctemplate #title\u003E\u003Cspan\u003Eitem four\u003C\u002Fspan\u003E\u003C\u002Ftemplate\u003E\n            \u003Cel-menu-item index=\"1-4-1\"\u003Eitem one\u003C\u002Fel-menu-item\u003E\n          \u003C\u002Fel-sub-menu\u003E\n        \u003C\u002Fel-sub-menu\u003E\n        \u003Cel-menu-item index=\"2\"\u003E\n          \u003Cel-icon\u003E\n            \u003CFiles \u002F\u003E\n          \u003C\u002Fel-icon\u003E\n          \u003Ctemplate #title\u003ENavigator Two\u003C\u002Ftemplate\u003E\n        \u003C\u002Fel-menu-item\u003E\n        \u003Cel-menu-item index=\"3\" disabled\u003E\n          \u003Cel-icon\u003E\n            \u003CDocument \u002F\u003E\n          \u003C\u002Fel-icon\u003E\n          \u003Ctemplate #title\u003ENavigator Three\u003C\u002Ftemplate\u003E\n        \u003C\u002Fel-menu-item\u003E\n        \u003Cel-menu-item index=\"4\"\u003E\n          \u003Cel-icon\u003E\n            \u003CSetting \u002F\u003E\n          \u003C\u002Fel-icon\u003E\n          \u003Ctemplate #title\u003ENavigator Four\u003C\u002Ftemplate\u003E\n        \u003C\u002Fel-menu-item\u003E\n        \u003Cel-menu-item index=\"5\"\u003E\n          \u003Cel-icon\u003E\n            \u003CCheck \u002F\u003E\n          \u003C\u002Fel-icon\u003E\n          \u003Ctemplate #title\u003ENavigator Five\u003C\u002Ftemplate\u003E\n        \u003C\u002Fel-menu-item\u003E\n      \u003C\u002Fel-menu\u003E\n    \u003C\u002Fclient-only\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n",title:"Sidebar with tooltip",type:c,author:d,dependencies:[],"justify-content":a,"align-items":a}]},prerenderedAt:1673167686990}}("start","Sidebar","sidebars","ryuhangyeong"))