export interface Attribute {
  title: string
  type: string
  author: string
  dependencies: string[]
  'justify-content': string
  'align-items': string
}

export interface Component extends Attribute {
  name: string
  code: string
}

export interface Example {
  name: string
  components: Component[]
}

export interface Category {
  name: string
  examples: Example[]
}
