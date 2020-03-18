import { NoteBook } from '../model'

async function createNoteBook(ctx: any) {
  const { book } = ctx.request.body
  const isExist = await NoteBook.findOne({ title: book.title })
  if (isExist) {
    return Error('Book Exist!')
  }

  await NoteBook.create(book)

  ctx.body = { success: 1 }
}

async function getNoteBook(ctx) {
  const noteBooks = await NoteBook.find()

  ctx.body = { noteBooks }
}

async function updateNoteBook(ctx) {
  const { book, type } = ctx.request.body
  const validTypes = ['title', 'desc', 'coverUrl', 'chapters', 'tags']

  if (validTypes.includes(type) && book[type]) {
    await NoteBook.findOneAndUpdate({ _id: book._id }, { $set: { [type]: book[type] } })
  }

  ctx.body = { success: 1 }
}

export default {
  createNoteBook,
  getNoteBook,
  updateNoteBook,
}
