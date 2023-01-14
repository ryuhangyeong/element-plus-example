export default (function(a,b,c,d){return {data:{"8G2NP00sf9":[{name:"TagDefault",code:"\u003Cscript setup\u003E\nimport { ref } from 'vue'\n\nconst tags = ref([\n  'Javascript',\n  'Vue.js',\n  'TypeScript',\n  'React',\n  'Jest',\n  'CSS',\n  'Kubernates',\n  'Node.js',\n  'Go',\n  'firebase',\n  'tailwindcss',\n  'MongoDB',\n  'AngularJS',\n  'Storybook',\n  'msw',\n  'Element Plus',\n  'Github Actions',\n  'Vite',\n  'Rust',\n  'HTML',\n  'Sass',\n  'Docker',\n  'ECMAScript',\n  'Qwik',\n  'Nuxt.js',\n])\n\u003C\u002Fscript\u003E\n\n\u003Ctemplate\u003E\n  \u003Cel-card shadow=\"never\" class=\"m-4\"\u003E\n    \u003Cel-tag\n      v-for=\"tag in tags\"\n      :key=\"tag\"\n      effect=\"light\"\n      type=\"info\"\n      round\n      class=\"mr-3 mb-3\"\n    \u003E\n      {{ tag }}\n    \u003C\u002Fel-tag\u003E\n  \u003C\u002Fel-card\u003E\n\u003C\u002Ftemplate\u003E\n",title:"tag default",type:b,dependencies:[c,d],"justify-content":a,"align-items":a},{name:"TagWithCount",code:"\u003Cscript setup\u003E\nimport { ref } from 'vue'\n\nconst tags = ref([\n  'Javascript',\n  'Vue.js',\n  'TypeScript',\n  'React',\n  'Jest',\n  'CSS',\n  'Kubernates',\n  'Node.js',\n  'Go',\n  'firebase',\n  'tailwindcss',\n  'MongoDB',\n  'AngularJS',\n  'Storybook',\n  'msw',\n  'Element Plus',\n  'Github Actions',\n  'Vite',\n  'Rust',\n  'HTML',\n  'Sass',\n  'Docker',\n  'ECMAScript',\n  'Qwik',\n  'Nuxt.js',\n])\n\u003C\u002Fscript\u003E\n\n\u003Ctemplate\u003E\n  \u003Cel-card shadow=\"never\" class=\"m-4\"\u003E\n    \u003Cel-tag\n      v-for=\"tag in tags\"\n      :key=\"tag\"\n      effect=\"light\"\n      type=\"info\"\n      round\n      class=\"mr-3 mb-3\"\n    \u003E\n      {{ tag }}\n      \u003Cspan\n        class=\"inline-flex items-center justify-center rounded-full bg-[#ccc] color-white w-5 h-5 ml-1 dark:bg-black\"\n      \u003E\n        2\n      \u003C\u002Fspan\u003E\n    \u003C\u002Fel-tag\u003E\n  \u003C\u002Fel-card\u003E\n\u003C\u002Ftemplate\u003E\n",title:"tag with count",type:b,author:"ryuhangyeong",dependencies:[c,d],"justify-content":a,"align-items":a}]},prerenderedAt:1673665613163}}("center","tags","card","tag"))