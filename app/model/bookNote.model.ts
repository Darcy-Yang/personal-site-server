import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema.Types

const BookNoteSchema = new mongoose.Schema({
  title: { type: String, description: '书摘标题' },
  content: { type: String, description: '书摘内容' },
  notes: { type: String, description: '书摘标注' },
  profile: {
    source: String,
    author: String
  },
  tagIds: [ObjectId],
  commentIds: [ObjectId]
}, { timestamp: true })

const BookNote = mongoose.model('bookNote', BookNoteSchema)

export default BookNote
