import Router from 'koa-router'
import { article } from '../controller'

const router = new Router({ prefix: '/article' })
router
  .get('/', ctx => article.getArticles(ctx))
  .post('/', ctx => article.createArticle(ctx))

export default router
