export default (function(a,b,c,d,e,f,g){return {data:{"57hhdJxmJs":[{name:"HeaderDouble",code:"\u003Cscript setup lang=\"ts\"\u003E\nimport { ref } from 'vue'\nimport { Search } from '@element-plus\u002Ficons-vue'\n\nconst input = ref('')\n\u003C\u002Fscript\u003E\n\n\u003Ctemplate\u003E\n  \u003Cel-header class=\"p-0 w-full\"\u003E\n    \u003Cdiv\n      class=\"px-[10px] lg:mx-auto lg:w-[1024px] bg-[#f8f9fa] w-full h-full box-border dark:bg-[#242424]\"\n    \u003E\n      \u003Cdiv class=\"flex items-center justify-between w-full h-full\"\u003E\n        \u003Cnav class=\"flex gap-[10px]\"\u003E\n          \u003Cel-link type=\"primary\"\u003EGuide\u003C\u002Fel-link\u003E\n          \u003Cel-link\u003EComponent\u003C\u002Fel-link\u003E\n          \u003Cel-link\u003EResource\u003C\u002Fel-link\u003E\n        \u003C\u002Fnav\u003E\n        \u003Cnav class=\"flex gap-[10px]\"\u003E\n          \u003Cel-link type=\"primary\"\u003ELog in\u003C\u002Fel-link\u003E\n          \u003Cel-link\u003ESign up\u003C\u002Fel-link\u003E\n        \u003C\u002Fnav\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"px-[10px] lg:mx-auto lg:w-[1024px] w-full h-full box-border\"\u003E\n      \u003Cdiv class=\"flex items-center justify-between w-full h-full\"\u003E\n        \u003Ch1\u003E\n          \u003Ca href=\"#\"\u003E\n            \u003Cimg\n              src=\"https:\u002F\u002Felement-plus.org\u002Fimages\u002Felement-plus-logo.svg\"\n              alt=\"Element Plus Logo\"\n              class=\"block w-[120px] h-[28px]\"\n            \u002F\u003E\n          \u003C\u002Fa\u003E\n        \u003C\u002Fh1\u003E\n        \u003Cdiv\u003E\n          \u003Cel-input\n            v-model=\"input\"\n            placeholder=\"Search\"\n            :prefix-icon=\"Search\"\n          \u002F\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cel-divider class=\"m-0\" \u002F\u003E\n  \u003C\u002Fel-header\u003E\n\u003C\u002Ftemplate\u003E\n",title:"double headers",type:b,author:c,dependencies:[d,f,e,g],"justify-content":a,"align-items":a},{name:"HeaderDoubleIcon",code:"\u003Cscript setup lang=\"ts\"\u003E\nimport { ref } from 'vue'\nimport { Search } from '@element-plus\u002Ficons-vue'\n\nconst input = ref('')\n\u003C\u002Fscript\u003E\n\n\u003Ctemplate\u003E\n  \u003Cel-header class=\"p-0 w-full\"\u003E\n    \u003Cdiv\n      class=\"px-[10px] lg:mx-auto lg:w-[1024px] bg-[#f8f9fa] w-full h-full box-border dark:bg-[#242424]\"\n    \u003E\n      \u003Cdiv class=\"flex items-center justify-between w-full h-full\"\u003E\n        \u003Ch1\u003E\n          \u003Ca href=\"#\"\u003E\n            \u003Cimg\n              src=\"https:\u002F\u002Felement-plus.org\u002Fimages\u002Felement-plus-logo.svg\"\n              alt=\"Element Plus Logo\"\n              class=\"block w-[120px] h-[28px]\"\n            \u002F\u003E\n          \u003C\u002Fa\u003E\n        \u003C\u002Fh1\u003E\n        \u003Cnav\u003E\n          \u003Cul class=\"flex gap-[20px] m-0 p-0 list-none\"\u003E\n            \u003Cli\u003E\n              \u003Cel-link href=\"#\" class=\"flex\"\u003E\n                \u003Cspan class=\"block text-center\"\u003E\n                  \u003Cel-icon :size=\"20\"\u003E\n                    \u003CDocument \u002F\u003E\n                  \u003C\u002Fel-icon\u003E\n                  \u003Cspan class=\"block\"\u003EGuide\u003C\u002Fspan\u003E\n                \u003C\u002Fspan\u003E\n              \u003C\u002Fel-link\u003E\n            \u003C\u002Fli\u003E\n            \u003Cli\u003E\n              \u003Cel-link href=\"#\" class=\"flex\"\u003E\n                \u003Cspan class=\"block text-center\"\u003E\n                  \u003Cel-icon :size=\"20\"\u003E\n                    \u003CFolder \u002F\u003E\n                  \u003C\u002Fel-icon\u003E\n                  \u003Cspan class=\"block\"\u003EComponent\u003C\u002Fspan\u003E\n                \u003C\u002Fspan\u003E\n              \u003C\u002Fel-link\u003E\n            \u003C\u002Fli\u003E\n            \u003Cli\u003E\n              \u003Cel-link href=\"#\" class=\"flex\"\u003E\n                \u003Cspan class=\"block text-center\"\u003E\n                  \u003Cel-icon :size=\"20\"\u003E\n                    \u003CBox \u002F\u003E\n                  \u003C\u002Fel-icon\u003E\n                  \u003Cspan class=\"block\"\u003EResource\u003C\u002Fspan\u003E\n                \u003C\u002Fspan\u003E\n              \u003C\u002Fel-link\u003E\n            \u003C\u002Fli\u003E\n          \u003C\u002Ful\u003E\n        \u003C\u002Fnav\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cdiv class=\"px-[10px] lg:mx-auto lg:w-[1024px] w-full h-full box-border\"\u003E\n      \u003Cdiv class=\"flex items-center justify-between w-full h-full\"\u003E\n        \u003Cdiv\u003E\n          \u003Cel-input\n            v-model=\"input\"\n            placeholder=\"Search\"\n            :prefix-icon=\"Search\"\n          \u002F\u003E\n        \u003C\u002Fdiv\u003E\n        \u003Cnav class=\"flex gap-[10px]\"\u003E\n          \u003Cel-link type=\"primary\"\u003ELog in\u003C\u002Fel-link\u003E\n          \u003Cel-link\u003ESign up\u003C\u002Fel-link\u003E\n        \u003C\u002Fnav\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cel-divider class=\"m-0\" \u002F\u003E\n  \u003C\u002Fel-header\u003E\n\u003C\u002Ftemplate\u003E\n",title:"double headers with icons",type:b,author:c,dependencies:[f,d,e,"icon",g],"justify-content":a,"align-items":a},{name:"HeaderMenu",code:"\u003Cscript lang=\"ts\" setup\u003E\nimport { ref } from 'vue'\n\nconst activeIndex = ref('1')\n\nconst handleSelect = (key: string, keyPath: string[]) =\u003E {\n  console.log(key, keyPath)\n}\n\u003C\u002Fscript\u003E\n\n\u003Ctemplate\u003E\n  \u003Cel-header class=\"p-0 w-full\"\u003E\n    \u003Cdiv class=\"px-[10px] lg:mx-auto lg:w-[1024px] w-full h-full box-border\"\u003E\n      \u003Cel-menu\n        :default-active=\"activeIndex\"\n        class=\"el-menu-demo\"\n        mode=\"horizontal\"\n        :ellipsis=\"false\"\n        @select=\"handleSelect\"\n      \u003E\n        \u003Cel-menu-item index=\"0\"\u003E\n          \u003Ch1\u003E\n            \u003Ca href=\"#\"\u003E\n              \u003Cimg\n                src=\"https:\u002F\u002Felement-plus.org\u002Fimages\u002Felement-plus-logo.svg\"\n                alt=\"Element Plus Logo\"\n                class=\"block w-[120px] h-[28px]\"\n              \u002F\u003E\n            \u003C\u002Fa\u003E\n          \u003C\u002Fh1\u003E\n        \u003C\u002Fel-menu-item\u003E\n        \u003Cdiv class=\"flex-grow\" \u002F\u003E\n        \u003Cel-menu-item index=\"1\"\u003EProcessing Center\u003C\u002Fel-menu-item\u003E\n        \u003Cel-sub-menu index=\"2\"\u003E\n          \u003Ctemplate #title\u003EWorkspace\u003C\u002Ftemplate\u003E\n          \u003Cel-menu-item index=\"2-1\"\u003Eitem one\u003C\u002Fel-menu-item\u003E\n          \u003Cel-menu-item index=\"2-2\"\u003Eitem two\u003C\u002Fel-menu-item\u003E\n          \u003Cel-menu-item index=\"2-3\"\u003Eitem three\u003C\u002Fel-menu-item\u003E\n          \u003Cel-sub-menu index=\"2-4\"\u003E\n            \u003Ctemplate #title\u003Eitem four\u003C\u002Ftemplate\u003E\n            \u003Cel-menu-item index=\"2-4-1\"\u003Eitem one\u003C\u002Fel-menu-item\u003E\n            \u003Cel-menu-item index=\"2-4-2\"\u003Eitem two\u003C\u002Fel-menu-item\u003E\n            \u003Cel-menu-item index=\"2-4-3\"\u003Eitem three\u003C\u002Fel-menu-item\u003E\n          \u003C\u002Fel-sub-menu\u003E\n        \u003C\u002Fel-sub-menu\u003E\n        \u003Cel-menu-item index=\"3\" disabled\u003EInfo\u003C\u002Fel-menu-item\u003E\n        \u003Cel-menu-item index=\"4\"\u003EOrders\u003C\u002Fel-menu-item\u003E\n      \u003C\u002Fel-menu\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fel-header\u003E\n\u003C\u002Ftemplate\u003E\n",title:"Header with multiple buttons and menu",type:b,author:c,dependencies:[d,"menu"],"justify-content":a,"align-items":a},{name:"HeaderMiddle",code:"\u003Ctemplate\u003E\n  \u003Cel-header class=\"p-0 w-full\"\u003E\n    \u003Cdiv class=\"px-[10px] lg:mx-auto lg:w-[1024px] w-full h-full box-border\"\u003E\n      \u003Cdiv class=\"flex items-center justify-between w-full h-full\"\u003E\n        \u003Ch1\u003E\n          \u003Ca href=\"#\"\u003E\n            \u003Cimg\n              src=\"https:\u002F\u002Felement-plus.org\u002Fimages\u002Felement-plus-logo.svg\"\n              alt=\"Element Plus Logo\"\n              class=\"block w-[120px] h-[28px]\"\n            \u002F\u003E\n          \u003C\u002Fa\u003E\n        \u003C\u002Fh1\u003E\n        \u003Cnav class=\"flex gap-[10px]\"\u003E\n          \u003Cel-link type=\"primary\"\u003EGuide\u003C\u002Fel-link\u003E\n          \u003Cel-link\u003EComponent\u003C\u002Fel-link\u003E\n          \u003Cel-link\u003EResource\u003C\u002Fel-link\u003E\n        \u003C\u002Fnav\u003E\n        \u003Cnav\u003E\n          \u003Cel-button type=\"primary\"\u003ELog in\u003C\u002Fel-button\u003E\n          \u003Cel-button\u003ESign up\u003C\u002Fel-button\u003E\n        \u003C\u002Fnav\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cel-divider class=\"m-0\" \u002F\u003E\n  \u003C\u002Fel-header\u003E\n\u003C\u002Ftemplate\u003E\n",title:"Header with multiple buttons and links",type:b,author:c,dependencies:[f,d,e,g],"justify-content":a,"align-items":a},{name:"HeaderMultipleButtons",code:"\u003Ctemplate\u003E\n  \u003Cel-header class=\"p-0 w-full\"\u003E\n    \u003Cdiv class=\"px-[10px] lg:mx-auto lg:w-[1024px] w-full h-full box-border\"\u003E\n      \u003Cdiv class=\"flex items-center justify-between w-full h-full\"\u003E\n        \u003Ch1\u003E\n          \u003Ca href=\"#\"\u003E\n            \u003Cimg\n              src=\"https:\u002F\u002Felement-plus.org\u002Fimages\u002Felement-plus-logo.svg\"\n              alt=\"Element Plus Logo\"\n              class=\"block w-[120px] h-[28px]\"\n            \u002F\u003E\n          \u003C\u002Fa\u003E\n        \u003C\u002Fh1\u003E\n        \u003Cnav\u003E\n          \u003Cel-button type=\"primary\"\u003EGuide\u003C\u002Fel-button\u003E\n          \u003Cel-button\u003EComponent\u003C\u002Fel-button\u003E\n          \u003Cel-button\u003EResource\u003C\u002Fel-button\u003E\n        \u003C\u002Fnav\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cel-divider class=\"m-0\" \u002F\u003E\n  \u003C\u002Fel-header\u003E\n\u003C\u002Ftemplate\u003E\n",title:"Header with multiple buttons",type:b,author:c,dependencies:[f,d,e],"justify-content":a,"align-items":a},{name:"HeaderMultipleLinks",code:"\u003Ctemplate\u003E\n  \u003Cel-header class=\"p-0 w-full\"\u003E\n    \u003Cdiv class=\"px-[10px] lg:mx-auto lg:w-[1024px] w-full h-full box-border\"\u003E\n      \u003Cdiv class=\"flex items-center justify-between w-full h-full\"\u003E\n        \u003Ch1\u003E\n          \u003Ca href=\"#\"\u003E\n            \u003Cimg\n              src=\"https:\u002F\u002Felement-plus.org\u002Fimages\u002Felement-plus-logo.svg\"\n              alt=\"Element Plus Logo\"\n              class=\"block w-[120px] h-[28px]\"\n            \u002F\u003E\n          \u003C\u002Fa\u003E\n        \u003C\u002Fh1\u003E\n        \u003Cnav class=\"flex gap-[10px]\"\u003E\n          \u003Cel-link type=\"primary\"\u003EGuide\u003C\u002Fel-link\u003E\n          \u003Cel-link\u003EComponent\u003C\u002Fel-link\u003E\n          \u003Cel-link\u003EResource\u003C\u002Fel-link\u003E\n        \u003C\u002Fnav\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cel-divider class=\"m-0\" \u002F\u003E\n  \u003C\u002Fel-header\u003E\n\u003C\u002Ftemplate\u003E\n",title:"Header with multiple links",type:b,author:c,dependencies:[d,e,g],"justify-content":a,"align-items":a},{name:"HeaderTab",code:"\u003Cscript setup lang=\"ts\"\u003E\nimport { ref } from 'vue'\n\nconst value = ref('first')\n\u003C\u002Fscript\u003E\n\n\u003Ctemplate\u003E\n  \u003Cel-header class=\"p-0 w-full\"\u003E\n    \u003Cdiv class=\"px-[10px] lg:mx-auto lg:w-[1024px] w-full h-full box-border\"\u003E\n      \u003Cdiv class=\"flex items-center justify-between w-full h-full\"\u003E\n        \u003Ch1\u003E\n          \u003Ca href=\"#\"\u003E\n            \u003Cimg\n              src=\"https:\u002F\u002Felement-plus.org\u002Fimages\u002Felement-plus-logo.svg\"\n              alt=\"Element Plus Logo\"\n              class=\"block w-[120px] h-[28px]\"\n            \u002F\u003E\n          \u003C\u002Fa\u003E\n        \u003C\u002Fh1\u003E\n        \u003Cnav class=\"flex gap-[10px]\"\u003E\n          \u003Cel-link type=\"primary\"\u003EGuide\u003C\u002Fel-link\u003E\n          \u003Cel-link\u003EComponent\u003C\u002Fel-link\u003E\n          \u003Cel-link\u003EResource\u003C\u002Fel-link\u003E\n        \u003C\u002Fnav\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n\n    \u003Cdiv\n      class=\"relative before:absolute before:top-[39px] before:border:left-0 before:border-b before:border-b-[#e4e7ed] before:border-b-solid before:w-full before:h-[1px] before:content-empty dark:before:border-b-[#414243]\"\n    \u003E\n      \u003Cdiv class=\"px-[10px] lg:mx-auto lg:w-[1024px] w-full h-full box-border\"\u003E\n        \u003Cel-tabs v-model=\"value\" type=\"card\"\u003E\n          \u003Cel-tab-pane label=\"User\" name=\"first\"\u003EUser\u003C\u002Fel-tab-pane\u003E\n          \u003Cel-tab-pane label=\"Config\" name=\"second\"\u003EConfig\u003C\u002Fel-tab-pane\u003E\n          \u003Cel-tab-pane label=\"Role\" name=\"third\"\u003ERole\u003C\u002Fel-tab-pane\u003E\n          \u003Cel-tab-pane label=\"Task\" name=\"fourth\"\u003ETask\u003C\u002Fel-tab-pane\u003E\n        \u003C\u002Fel-tabs\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fel-header\u003E\n\u003C\u002Ftemplate\u003E\n",title:"Header with multiple tab",type:b,author:c,dependencies:[f,d,e,g,"tab"],"justify-content":a,"align-items":a}]},prerenderedAt:1673146953287}}("center","headers","ryuhangyeong","container","divider","button","link"))