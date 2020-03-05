import { Article } from '../model'

async function createArticle(ctx: any) {
  const { title, content } = ctx.request.body
  if (!content) return

  await Article.create({
    title,
    content
  })
  ctx.body = { success: 1, message: '创建成功' }
}

// 考虑分页
async function getArticles(ctx: any) {
  const { search } = ctx.request.query
  let result

  if (search) {
    const reg = new RegExp(search, 'i')
    result = await Article.find({ content: reg })
  } else {
    result = await Article.find()
  }

  ctx.body = {
    success: 1,
    result,
    message: '获取文章成功'
  }
}

export default {
  createArticle,
  getArticles
}
