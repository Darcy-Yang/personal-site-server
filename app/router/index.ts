import Router from 'koa-router'
import basic from './basic.router'
import article from './article.router'
import noteBook from './noteBook.router'
import register from './register.router'
import login from './login.router'

const router = new Router()
router
  .use(basic.routes())
  .use(article.routes())
  .use(noteBook.routes())
  .use(register.routes())
  .use(login.routes())

export default router
