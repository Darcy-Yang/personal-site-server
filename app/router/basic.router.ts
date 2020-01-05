import Router from 'koa-router'
import { basic } from '../controller'

const router = new Router()
router.get('/basic/info', ctx => basic.getBasicInfo(ctx))

export default router
