import Router from 'koa-router'
import basic from './basic.router'
import article from './article.router'

const router = new Router()
router
  .use(basic.routes())
  .use(article.routes())

export default router
