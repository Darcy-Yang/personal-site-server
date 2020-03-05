import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema.Types

const NoteBookSchema = new mongoose.Schema({
  title: String,
  desc: String,
  coverUrl: String,
  tags: [ObjectId]
}, { timestamps: true })

const NoteBook = mongoose.model('noteBook', NoteBookSchema)

export default NoteBook
