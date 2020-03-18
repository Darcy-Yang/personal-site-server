import Router from 'koa-router'
import { login } from '../controller'

const router = new Router({ prefix: '/login' })

router
  .post('/', ctx => login.verifyAccount(ctx))

export default router
