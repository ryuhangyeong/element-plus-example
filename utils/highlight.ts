import escapeHtml from 'escape-html'
import prism from 'prismjs'

function wrap(code: string, lang: string): string {
  if (lang === 'text') {
    code = escapeHtml(code)
  }
  return `<pre class="language-html"><code>${code}</code></pre>`
}

export const highlight = (str: string, lang: string) => {
  if (!lang) {
    return wrap(str, 'text')
  }
  lang = lang.toLowerCase()
  const rawLang = lang
  if (lang === 'vue' || lang === 'html') {
    lang = 'markup'
  }
  if (lang === 'md') {
    lang = 'markdown'
  }
  if (lang === 'ts') {
    lang = 'typescript'
  }
  if (!prism.languages[lang]) {
    try {
    } catch {
      console.warn(`Syntax highlight for language "${lang}" is not supported.`)
    }
  }
  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang)
    return wrap(code, rawLang)
  }
  return wrap(str, 'text')
}
