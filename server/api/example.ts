import { GET_EXAMPLES_BY_TYPE } from '@/data/examples'

export default defineEventHandler((event) => {
  const query = getQuery(event)

  if (query.type) {
    return GET_EXAMPLES_BY_TYPE()[String(query.type)]
  }

  return []
})
