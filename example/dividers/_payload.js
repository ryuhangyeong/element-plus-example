export default (function(a,b,c){return {data:{TJn9I2OIxW:[{name:"DividerWithIcon",code:"\u003Ctemplate\u003E\n  \u003Cel-divider class=\"divider-with-icon\"\u003E\n    \u003Cel-icon\u003E\n      \u003CCheck \u002F\u003E\n    \u003C\u002Fel-icon\u003E\n  \u003C\u002Fel-divider\u003E\n\u003C\u002Ftemplate\u003E\n",title:"Divider with icon",type:b,dependencies:[c,"icon"],"justify-content":a,"align-items":a},{name:"DividerWithRadioGroup",code:"\u003Cscript setup lang=\"ts\"\u003E\nimport { ref } from 'vue'\n\nconst value = ref('Guide')\n\u003C\u002Fscript\u003E\n\n\u003Ctemplate\u003E\n  \u003Cel-divider class=\"divider-with-radio-group\"\u003E\n    \u003Cel-radio-group v-model=\"value\" size=\"large\"\u003E\n      \u003Cel-radio-button label=\"Guide\" \u002F\u003E\n      \u003Cel-radio-button label=\"Component\" \u002F\u003E\n      \u003Cel-radio-button label=\"Resource\" \u002F\u003E\n    \u003C\u002Fel-radio-group\u003E\n  \u003C\u002Fel-divider\u003E\n\u003C\u002Ftemplate\u003E\n",title:"Divider with radio group",type:b,dependencies:[c,"radio"],"justify-content":a,"align-items":a}]},prerenderedAt:1673665613062}}("center","dividers","divider"))