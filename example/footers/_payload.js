export default (function(a,b,c,d,e){return {data:{epyvoLDinS:[{name:"FooterDefault",code:"\u003Cscript setup\u003E\nconst today = new Date()\nconst year = today.getFullYear()\n\u003C\u002Fscript\u003E\n\n\u003Ctemplate\u003E\n  \u003Cel-footer class=\"p-0 w-full\"\u003E\n    \u003Cel-divider class=\"m-0 mt-4\" \u002F\u003E\n    \u003Cdiv class=\"px-2 py-6 mx-auto max-w-5xl h-full lg:px-0\"\u003E\n      \u003Cdiv\n        class=\"flex items-center justify-between w-full h-full flex-col lg:flex-row\"\n      \u003E\n        \u003Cdiv class=\"flex items-center\"\u003E\n          \u003Ca href=\"https:\u002F\u002Felement-plus.org\u002Fen-US\u002F\" target=\"_blank\"\u003E\n            \u003Cimg\n              src=\"https:\u002F\u002Felement-plus.org\u002Fimages\u002Felement-plus-logo.svg\"\n              alt=\"Element Plus\"\n              class=\"block w-[120px] h-[28px]\"\n            \u002F\u003E\n          \u003C\u002Fa\u003E\n          \u003Cp class=\"ml-2 text-[#606266] text-[14px]\"\u003E© {{ year }}\u003C\u002Fp\u003E\n        \u003C\u002Fdiv\u003E\n        \u003Cnav class=\"flex mt-4 space-x-6 lg:mt-0\"\u003E\n          \u003Cel-link type=\"primary\"\u003EGuide\u003C\u002Fel-link\u003E\n          \u003Cel-link\u003EComponent\u003C\u002Fel-link\u003E\n          \u003Cel-link\u003EResource\u003C\u002Fel-link\u003E\n        \u003C\u002Fnav\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fel-footer\u003E\n\u003C\u002Ftemplate\u003E\n",title:"footer default",type:b,dependencies:[c,d,e],"justify-content":a,"align-items":a},{name:"FooterWithMultipleLink",code:"\u003Ctemplate\u003E\n  \u003Cel-footer class=\"p-0 w-full\"\u003E\n    \u003Cel-divider class=\"m-0 mt-4\" \u002F\u003E\n    \u003Cdiv class=\"px-2 py-6 mx-auto max-w-5xl lg:px-0 overflow-hidden\"\u003E\n      \u003Cdiv class=\"flex flex-col justify-between lg:flex-row\"\u003E\n        \u003Ca\n          href=\"https:\u002F\u002Felement-plus.org\u002Fen-US\u002F\"\n          target=\"_blank\"\n          class=\"mb-10 lg:mb-0\"\n        \u003E\n          \u003Cimg\n            src=\"https:\u002F\u002Felement-plus.org\u002Fimages\u002Felement-plus-logo.svg\"\n            alt=\"Element Plus\"\n            class=\"block w-[120px] h-[28px]\"\n          \u002F\u003E\n        \u003C\u002Fa\u003E\n        \u003Cdiv\u003E\n          \u003Cel-row :gutter=\"100\"\u003E\n            \u003Cel-col :xs=\"24\" :sm=\"24\" :md=\"8\" :lg=\"8\" :xl=\"8\"\u003E\n              \u003Cdiv class=\"mb-5 lg:mb-0\"\u003E\n                \u003Cp class=\"mb-3\"\u003ELinks\u003C\u002Fp\u003E\n                \u003Cul class=\"flex flex-col space-y-1\"\u003E\n                  \u003Cli\u003E\n                    \u003Ca\n                      href=\"https:\u002F\u002Fgithub.com\u002Felement-plus\u002Felement-plus\"\n                      target=\"_blank\"\n                      class=\"text-sm text-[#606266]\"\n                    \u003E\n                      GitHub\n                    \u003C\u002Fa\u003E\n                  \u003C\u002Fli\u003E\n                  \u003Cli\u003E\n                    \u003Ca\n                      href=\"https:\u002F\u002Felement-plus.gitee.io\u002Fen-US\u002F?_gl=1*1dkdr2e*_ga*NTI1NDIyMzU4LjE2NzI0NjYwNjc.*_ga_M74ZHEQ1M1*MTY3MzU5MTA1MS4yOS4xLjE2NzM1OTE2MzcuMC4wLjA.\"\n                      target=\"_blank\"\n                      class=\"text-sm text-[#606266]\"\n                    \u003E\n                      China Mirror 🇨🇳\n                    \u003C\u002Fa\u003E\n                  \u003C\u002Fli\u003E\n                  \u003Cli\u003E\n                    \u003Ca\n                      href=\"https:\u002F\u002Fgithub.com\u002Felement-plus\u002Felement-plus\u002Freleases\"\n                      target=\"_blank\"\n                      class=\"text-sm text-[#606266]\"\n                    \u003E\n                      Changelog\n                    \u003C\u002Fa\u003E\n                  \u003C\u002Fli\u003E\n                  \u003Cli\u003E\n                    \u003Ca\n                      href=\"https:\u002F\u002Felement.eleme.io\u002F#\u002Fen-US\"\n                      target=\"_blank\"\n                      class=\"text-sm text-[#606266]\"\n                    \u003E\n                      Element UI for Vue 2\n                    \u003C\u002Fa\u003E\n                  \u003C\u002Fli\u003E\n                \u003C\u002Ful\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fel-col\u003E\n            \u003Cel-col :xs=\"24\" :sm=\"24\" :md=\"8\" :lg=\"8\" :xl=\"8\"\u003E\n              \u003Cdiv class=\"mb-5 lg:mb-0\"\u003E\n                \u003Cp class=\"mb-3\"\u003ECommunity\u003C\u002Fp\u003E\n                \u003Cul class=\"flex flex-col space-y-1\"\u003E\n                  \u003Cli\u003E\n                    \u003Ca\n                      href=\"https:\u002F\u002Fdiscord.link\u002FElementPlus\"\n                      target=\"_blank\"\n                      class=\"text-sm text-[#606266]\"\n                    \u003E\n                      Discord\n                    \u003C\u002Fa\u003E\n                  \u003C\u002Fli\u003E\n                  \u003Cli\u003E\n                    \u003Ca\n                      href=\"https:\u002F\u002Fgithub.com\u002Felement-plus\u002Felement-plus\u002Fissues\"\n                      target=\"_blank\"\n                      class=\"text-sm text-[#606266]\"\n                    \u003E\n                      Feedback\n                    \u003C\u002Fa\u003E\n                  \u003C\u002Fli\u003E\n                  \u003Cli\u003E\n                    \u003Ca\n                      href=\"https:\u002F\u002Fgithub.com\u002Felement-plus\u002Felement-plus\u002Fblob\u002Fdev\u002F.github\u002FCONTRIBUTING.en-US.md\"\n                      target=\"_blank\"\n                      class=\"text-sm text-[#606266]\"\n                    \u003E\n                      Contribution\n                    \u003C\u002Fa\u003E\n                  \u003C\u002Fli\u003E\n                  \u003Cli\u003E\n                    \u003Ca\n                      href=\"https:\u002F\u002Fsegmentfault.com\u002Ft\u002Felement-plus\"\n                      target=\"_blank\"\n                      class=\"text-sm text-[#606266]\"\n                    \u003E\n                      SegmentFault\n                    \u003C\u002Fa\u003E\n                  \u003C\u002Fli\u003E\n                \u003C\u002Ful\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fel-col\u003E\n            \u003Cel-col :xs=\"24\" :sm=\"24\" :md=\"8\" :lg=\"8\" :xl=\"8\"\u003E\n              \u003Cdiv class=\"mb-5 lg:mb-0\"\u003E\n                \u003Cp class=\"mb-3\"\u003EResources\u003C\u002Fp\u003E\n                \u003Cul class=\"flex flex-col space-y-1\"\u003E\n                  \u003Cli\u003E\n                    \u003Ca\n                      href=\"https:\u002F\u002Felement-plus.org\u002Fen-US\u002Fresource\u002Findex.html\"\n                      target=\"_blank\"\n                      class=\"text-sm text-[#606266]\"\n                    \u003E\n                      Axure Components\n                    \u003C\u002Fa\u003E\n                  \u003C\u002Fli\u003E\n                  \u003Cli\u003E\n                    \u003Ca\n                      href=\"https:\u002F\u002Felement-plus.org\u002Fen-US\u002Fresource\u002Findex.html\"\n                      target=\"_blank\"\n                      class=\"text-sm text-[#606266]\"\n                    \u003E\n                      Sketch Template\n                    \u003C\u002Fa\u003E\n                  \u003C\u002Fli\u003E\n                  \u003Cli\u003E\n                    \u003Ca\n                      href=\"https:\u002F\u002Felement-plus.org\u002Fen-US\u002Fresource\u002Findex.html\"\n                      target=\"_blank\"\n                      class=\"text-sm text-[#606266]\"\n                    \u003E\n                      Figma Template\n                    \u003C\u002Fa\u003E\n                  \u003C\u002Fli\u003E\n                \u003C\u002Ful\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fel-col\u003E\n          \u003C\u002Fel-row\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fel-footer\u003E\n\u003C\u002Ftemplate\u003E\n",title:"footer with multiple link",type:b,dependencies:[c,d,"layout",e],"justify-content":a,"align-items":a}]},prerenderedAt:1673600327892}}("start","footers","container","divider","link"))