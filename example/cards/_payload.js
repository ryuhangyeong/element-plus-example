export default (function(a,b,c,d,e){return {data:{"5nVC27jJw6":[{name:"CardArticle",code:"\u003Ctemplate\u003E\n  \u003Cdiv class=\"overflow-hidden\"\u003E\n    \u003Cel-card\n      shadow=\"never\"\n      class=\"m-2 w-full max-w-xl\"\n      :body-style=\"{ padding: 0 }\"\n    \u003E\n      \u003Cimg\n        src=\"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80\"\n        alt=\"code img\"\n        class=\"w-full\"\n      \u002F\u003E\n      \u003Cdiv class=\"p-5\"\u003E\n        \u003Cdiv class=\"flex space-x-2\"\u003E\n          \u003Cel-tag\u003EHTML\u003C\u002Fel-tag\u003E\n          \u003Cel-tag\u003ECSS\u003C\u002Fel-tag\u003E\n          \u003Cel-tag\u003EJavascript\u003C\u002Fel-tag\u003E\n        \u003C\u002Fdiv\u003E\n        \u003Cheader\u003E\n          \u003Ch2 class=\"my-5\"\u003EHow to become a front-end developer\u003C\u002Fh2\u003E\n          \u003Cp class=\"mb-5\"\u003E\n            If you want to become a frontend developer, this post will help you.\n          \u003C\u002Fp\u003E\n        \u003C\u002Fheader\u003E\n        \u003Cfooter class=\"flex items-center justify-between\"\u003E\n          \u003Cdiv class=\"flex\"\u003E\n            \u003Cel-avatar\n              src=\"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F27342882?v=4\"\n              :size=\"40\"\n            \u002F\u003E\n            \u003Cdiv class=\"ml-2 text-sm\"\u003E\n              \u003Ca\n                href=\"https:\u002F\u002Fgithub.com\u002Fryuhangyeong\"\n                class=\"inline-block decoration-none text-[#868e96]\"\n                target=\"_blank\"\n              \u003E\n                ryuhangyeong\n              \u003C\u002Fa\u003E\n              \u003Cp\u003EFebruary 19, 2022\u003C\u002Fp\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv\u003E\n            \u003Cel-link\n              href=\"https:\u002F\u002Fgithub.com\u002Fryuhangyeong\"\n              type=\"primary\"\n              target=\"_blank\"\n            \u003E\n              Read more\n            \u003C\u002Fel-link\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Ffooter\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fel-card\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ftemplate\u003E\n",title:"article card",type:b,dependencies:[d,c,e,"tag"],"justify-content":a,"align-items":a},{name:"CardImage",code:"\u003Ctemplate\u003E\n  \u003Cel-card\n    shadow=\"never\"\n    class=\"relative w-full max-w-xl\"\n    :body-style=\"{ padding: 0 }\"\n  \u003E\n    \u003Cimg\n      src=\"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80\"\n      alt=\"work img\"\n      class=\"block\"\n    \u002F\u003E\n    \u003Ca\n      href=\"#\"\n      class=\"absolute top-0 left-0 flex w-full h-full decoration-none text-[#333]\"\n    \u003E\n      \u003Cdiv\n        style=\"\n          background-image: linear-gradient(\n            rgba(0, 0, 0, 0) 0%,\n            rgba(0, 0, 0, 0.85) 90%\n          );\n        \"\n        class=\"flex flex-col mt-auto p-5 w-full\"\n      \u003E\n        \u003Ch2 class=\"mb-2 text-white text-lg\"\u003EAbout refactoring\u003C\u002Fh2\u003E\n        \u003Cdiv class=\"flex justify-between\"\u003E\n          \u003Cspan class=\"text-[#868e96]\"\u003Eryuhangyeong\u003C\u002Fspan\u003E\n          \u003Cdiv class=\"text-[#868e96] text-sm\"\u003E\n            \u003Cdiv class=\"flex items-center\"\u003E\n              \u003Cel-icon\u003E\n                \u003CView \u002F\u003E\n              \u003C\u002Fel-icon\u003E\n              \u003Cspan class=\"ml-3\"\u003E4529\u003C\u002Fspan\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fa\u003E\n  \u003C\u002Fel-card\u003E\n\u003C\u002Ftemplate\u003E\n",title:"image card",type:b,dependencies:[c,"icon"],"justify-content":a,"align-items":a},{name:"CardUser",code:"\u003Ctemplate\u003E\n  \u003Cel-card\n    shadow=\"never\"\n    :body-style=\"{\n      padding: '30px',\n      overflow: 'hidden',\n    }\"\n    class=\"relative m-2 w-full max-w-xl overflow-visible\"\n  \u003E\n    \u003Ch2 class=\"mb-5\"\u003ERyuhangyeong\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-[#868e96]\"\u003E\n      Front-end developer and open source enthusiast. We hope to develop a UI\n      platform that can help many people in the future. I still working hard to\n      make this dream come true.\n    \u003C\u002Fp\u003E\n    \u003Cdiv class=\"absolute -top-10 right-5\"\u003E\n      \u003Cel-avatar\n        src=\"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F27342882?v=4\"\n        :size=\"80\"\n      \u002F\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cfooter class=\"mt-2 text-right\"\u003E\n      \u003Cel-link\n        href=\"https:\u002F\u002Fgithub.com\u002Fryuhangyeong\"\n        type=\"primary\"\n        target=\"_blank\"\n      \u003E\n        Read more\n      \u003C\u002Fel-link\u003E\n    \u003C\u002Ffooter\u003E\n  \u003C\u002Fel-card\u003E\n\u003C\u002Ftemplate\u003E\n",title:"user card",type:b,dependencies:[d,c,e],"justify-content":a,"align-items":a},{name:"cardWithImagesAndUserAvatar",code:"\u003Ctemplate\u003E\n  \u003Cel-card\n    shadow=\"never\"\n    class=\"relative w-full max-w-xs\"\n    :body-style=\"{ padding: 0 }\"\n  \u003E\n    \u003Cheader class=\"relative\"\u003E\n      \u003Cimg\n        src=\"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80\"\n        class=\"block w-full h-60\"\n      \u002F\u003E\n      \u003Cel-avatar\n        src=\"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F27342882?v=4\"\n        :size=\"80\"\n        class=\"absolute -bottom-10 left-[50%] transform -translate-x-1\u002F2\"\n      \u002F\u003E\n    \u003C\u002Fheader\u003E\n    \u003Cdiv\u003E\n      \u003Cdiv class=\"text-center\"\u003E\n        \u003Cdiv class=\"mt-[50px] mb-[30px]\"\u003E\n          \u003Cp href=\"https:\u002F\u002Fgithub.com\u002Fryuhangyeong\" class=\"m-0 text-2xl\"\u003E\n            ryuhangyeong\n          \u003C\u002Fp\u003E\n          \u003Cp class=\"text-[#868e96]\"\u003Efrontend engineer\u003C\u002Fp\u003E\n        \u003C\u002Fdiv\u003E\n        \u003Cel-row :gutter=\"10\"\u003E\n          \u003Cel-col :span=\"8\"\u003E\n            \u003Cdiv\u003E\n              \u003Cspan class=\"font-semibold\"\u003E44\u003C\u002Fspan\u003E\n              \u003Cp class=\"text-[#868e96] text-sm\"\u003EFollowers\u003C\u002Fp\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fel-col\u003E\n          \u003Cel-col :span=\"8\"\u003E\n            \u003Cdiv\u003E\n              \u003Cspan class=\"font-semibold\"\u003E25\u003C\u002Fspan\u003E\n              \u003Cp class=\"text-[#868e96] text-sm\"\u003EFollowing\u003C\u002Fp\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fel-col\u003E\n          \u003Cel-col :span=\"8\"\u003E\n            \u003Cdiv\u003E\n              \u003Cspan class=\"font-semibold\"\u003E2\u003C\u002Fspan\u003E\n              \u003Cp class=\"text-[#868e96] text-sm\"\u003ESponsoring\u003C\u002Fp\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fel-col\u003E\n        \u003C\u002Fel-row\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n    \u003Cfooter class=\"p-5\"\u003E\n      \u003Cel-button type=\"primary\" class=\"w-full\"\u003ESubscribe\u003C\u002Fel-button\u003E\n    \u003C\u002Ffooter\u003E\n  \u003C\u002Fel-card\u003E\n\u003C\u002Ftemplate\u003E\n",title:"card with images and user avatar",type:b,dependencies:[d,"button",c,"layout"],"justify-content":a,"align-items":a}]},prerenderedAt:1674558851034}}("center","cards","card","avatar","link"))