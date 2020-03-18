import Router from 'koa-router'
import { noteBook } from '../controller'

const router = new Router({ prefix: '/notebook' })

router
  .get('/', ctx => noteBook.getNoteBook(ctx))
  .post('/', ctx => noteBook.createNoteBook(ctx))
  .post('/update', ctx => noteBook.updateNoteBook(ctx))

export default router
