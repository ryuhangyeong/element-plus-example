import fs from 'fs'
import path from 'path'

import type { Category, Attribute } from './types'

const EXAMPLES_PATH = path.join('components/examples')

const GET_EXAMPLES = fs.readdirSync(EXAMPLES_PATH)

export const APPLICATION_EXAMPLES = [
  {
    name: 'Headers',
    components: [],
  },
  {
    name: 'Footers',
    components: [],
  },
  {
    name: 'Grids',
    components: [],
  },
  {
    name: 'Dividers',
    components: [],
  },
  {
    name: 'ErrorPages',
    components: [],
  },
  {
    name: 'Authentications',
    components: [],
  },
  {
    name: 'Pricings',
    components: [],
  },
]

export const BLOG_EXAMPLES = [
  {
    name: 'Tags',
    components: [],
  },
  {
    name: 'Cards',
    components: [],
  },
]

export const CATEGORIES: Category[] = [
  {
    name: 'Application',
    examples: APPLICATION_EXAMPLES,
  },
  {
    name: 'Blog',
    examples: BLOG_EXAMPLES,
  },
]

export const GET_EXAMPLES_BY_TYPE = () => {
  return GET_EXAMPLES.reduce<Record<string, Attribute[]>>((acc, name) => {
    const attributes = fs.readFileSync(
      path.join(EXAMPLES_PATH, name, 'attributes.json')
    )

    const code = fs.readFileSync(
      path.join(EXAMPLES_PATH, name, 'index.vue'),
      'utf8'
    )

    const getAttributes = JSON.parse(attributes.toString())

    const { type } = getAttributes

    if (acc[type] === undefined) {
      acc[type] = []
    }

    acc[type].push({
      name,
      code,
      ...getAttributes,
    })

    return acc
  }, {})
}

export const GET_CATEGORIES = () => {
  const getExamplesByType = GET_EXAMPLES_BY_TYPE()

  return CATEGORIES.map((category: Category) => {
    return {
      ...category,
      examples: category.examples.map((example) => {
        return {
          ...example,
          components: getExamplesByType[example.name.toLowerCase()],
        }
      }),
    }
  })
}
