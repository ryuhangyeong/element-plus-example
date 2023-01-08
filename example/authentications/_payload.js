export default (function(a,b,c,d,e,f,g,h){return {data:{jSJ8TEdhXB:[{name:"AuthenticationCard",code:"\u003Cscript setup lang=\"ts\"\u003E\nimport { ref } from 'vue'\n\nconst checked = ref(false)\n\u003C\u002Fscript\u003E\n\n\u003Ctemplate\u003E\n  \u003Cel-card\n    shadow=\"never\"\n    class=\"m-[10px] w-full sm:w-[400px]\"\n    :body-style=\"{ padding: 20 }\"\n  \u003E\n    \u003Cdiv class=\"m-[30px] text-center\"\u003E\n      \u003Cel-link\n        href=\"https:\u002F\u002Felement-plus.org\u002Fen-US\u002F\"\n        :underline=\"false\"\n        class=\"m-0\"\n      \u003E\n        \u003Cimg\n          src=\"https:\u002F\u002Felement-plus.org\u002Fimages\u002Felement-plus-logo.svg\"\n          class=\"block w-[120px] h-[28px]\"\n          alt=\"Element Plus\"\n        \u002F\u003E\n      \u003C\u002Fel-link\u003E\n      \u003Ch2 class=\"m-0 my-[12px]\"\u003ELog in\u003C\u002Fh2\u003E\n      \u003Cp class=\"m-0 text-[#868e96]\"\u003E\n        Don't have an account?\n        \u003Cel-link type=\"primary\"\u003ESign up\u003C\u002Fel-link\u003E\n      \u003C\u002Fp\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cel-form label-position=\"top\"\u003E\n      \u003Cel-form-item label=\"Email\"\u003E\n        \u003Cel-input size=\"large\" \u002F\u003E\n      \u003C\u002Fel-form-item\u003E\n      \u003Cel-form-item label=\"Password\"\u003E\n        \u003Cel-input size=\"large\" \u002F\u003E\n      \u003C\u002Fel-form-item\u003E\n      \u003Cdiv class=\"flex justify-between mb-[10px]\"\u003E\n        \u003Cel-checkbox v-model=\"checked\" label=\"Remember me\" size=\"large\" \u002F\u003E\n        \u003Cel-link type=\"primary\"\u003EForgot password?\u003C\u002Fel-link\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cel-button type=\"primary\" size=\"large\" class=\"w-full\"\u003ESign in\u003C\u002Fel-button\u003E\n    \u003C\u002Fel-form\u003E\n  \u003C\u002Fel-card\u003E\n\u003C\u002Ftemplate\u003E\n",title:"authentication card",type:b,author:c,dependencies:[d,h,e,f,g],"justify-content":a,"align-items":a},{name:"AuthenticationCardSocialMediaLink",code:"\u003Cscript setup lang=\"ts\"\u003E\nimport { ref } from 'vue'\n\nconst checked = ref(false)\n\u003C\u002Fscript\u003E\n\n\u003Ctemplate\u003E\n  \u003Cel-card\n    shadow=\"never\"\n    class=\"m-[10px] w-full sm:w-[400px]\"\n    :body-style=\"{ padding: 20 }\"\n  \u003E\n    \u003Cdiv class=\"m-[30px] text-center\"\u003E\n      \u003Cel-link\n        href=\"https:\u002F\u002Felement-plus.org\u002Fen-US\u002F\"\n        :underline=\"false\"\n        class=\"m-0\"\n      \u003E\n        \u003Cimg\n          src=\"https:\u002F\u002Felement-plus.org\u002Fimages\u002Felement-plus-logo.svg\"\n          class=\"block w-[120px] h-[28px]\"\n          alt=\"Element Plus\"\n        \u002F\u003E\n      \u003C\u002Fel-link\u003E\n      \u003Ch2 class=\"m-0 my-[12px]\"\u003ELog in\u003C\u002Fh2\u003E\n      \u003Cp class=\"m-0 text-[#868e96]\"\u003E\n        Don't have an account?\n        \u003Cel-link type=\"primary\"\u003ESign up\u003C\u002Fel-link\u003E\n      \u003C\u002Fp\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cel-form label-position=\"top\"\u003E\n      \u003Cel-form-item label=\"Email\"\u003E\n        \u003Cel-input size=\"large\" \u002F\u003E\n      \u003C\u002Fel-form-item\u003E\n      \u003Cel-form-item label=\"Password\"\u003E\n        \u003Cel-input size=\"large\" \u002F\u003E\n      \u003C\u002Fel-form-item\u003E\n      \u003Cdiv class=\"flex justify-between mb-[10px]\"\u003E\n        \u003Cel-checkbox v-model=\"checked\" label=\"Remember me\" size=\"large\" \u002F\u003E\n        \u003Cel-link type=\"primary\"\u003EForgot password?\u003C\u002Fel-link\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cel-button type=\"primary\" size=\"large\" class=\"w-full\"\u003ESign in\u003C\u002Fel-button\u003E\n    \u003C\u002Fel-form\u003E\n    \u003Cel-divider\u003Eor\u003C\u002Fel-divider\u003E\n    \u003Cul class=\"m-0 p-0 list-none\"\u003E\n      \u003Cli\u003E\n        \u003Cel-button class=\"w-full\"\u003E\n          \u003Cel-icon size=\"20\"\u003E\n            \u003CEleme \u002F\u003E\n          \u003C\u002Fel-icon\u003E\n          \u003Cspan\u003ESign in with Google\u003C\u002Fspan\u003E\n        \u003C\u002Fel-button\u003E\n      \u003C\u002Fli\u003E\n    \u003C\u002Ful\u003E\n  \u003C\u002Fel-card\u003E\n\u003C\u002Ftemplate\u003E\n",title:"authentication card with social media link",type:b,author:c,dependencies:[d,h,e,f,"icon",g],"justify-content":a,"align-items":a},{name:"AuthenticationPage",code:"\u003Cscript setup lang=\"ts\"\u003E\nimport { ref } from 'vue'\n\nconst checked = ref(false)\n\u003C\u002Fscript\u003E\n\n\u003Ctemplate\u003E\n  \u003Cdiv class=\"px-[10px] lg:mx-auto lg:w-[860px] w-full h-full box-border\"\u003E\n    \u003Ch2 class=\"m-0 text-[#868e96] font-300\"\u003EWelcome back\u003C\u002Fh2\u003E\n    \u003Ch2 class=\"m-0 my-[10px] text-[30px] font-400\"\u003ELogin To Your Account\u003C\u002Fh2\u003E\n    \u003Cel-form label-position=\"top\"\u003E\n      \u003Cel-form-item label=\"Email\"\u003E\n        \u003Cel-input size=\"large\" \u002F\u003E\n      \u003C\u002Fel-form-item\u003E\n      \u003Cel-form-item label=\"Password\"\u003E\n        \u003Cel-input size=\"large\" \u002F\u003E\n      \u003C\u002Fel-form-item\u003E\n      \u003Cdiv class=\"flex justify-between mb-[10px]\"\u003E\n        \u003Cel-checkbox v-model=\"checked\" label=\"Remember me\" size=\"large\" \u002F\u003E\n        \u003Cel-link type=\"primary\"\u003EForgot password?\u003C\u002Fel-link\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cel-button type=\"primary\" size=\"large\" class=\"w-full\"\u003ESign in\u003C\u002Fel-button\u003E\n    \u003C\u002Fel-form\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n",title:"authentication page",type:b,author:c,dependencies:[d,e,f,g],"justify-content":a,"align-items":a}]},prerenderedAt:1673146953520}}("center","authentications","ryuhangyeong","button","checkbox","form","link","card"))