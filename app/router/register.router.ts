import Router from 'koa-router'
import { register } from '../controller'

const router = new Router({ prefix: '/register' })

router
  .post('/', ctx => register.registerAccount(ctx))

export default router
