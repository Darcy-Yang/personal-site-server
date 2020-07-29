import Router from 'koa-router'
import basic from './basic.router'
import article from './article.router'
import register from './register.router'
import login from './login.router'

const router = new Router()
router
  .use(basic.routes())
  .use(article.routes())
  .use(register.routes())
  .use(login.routes())

export default router
