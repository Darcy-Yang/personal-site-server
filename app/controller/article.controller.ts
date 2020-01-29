import { Article } from '../model'

async function createArticle(ctx: any) {
  const { content } = ctx.request.body
  if (!content) return

  await Article.create({
    content
  })
  ctx.body = { success: 1 }
}

export default {
  createArticle
}
