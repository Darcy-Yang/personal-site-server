import Router from 'koa-router'
import basic from './basic.router'

const router = new Router()
router.use(basic.routes())

export default router
