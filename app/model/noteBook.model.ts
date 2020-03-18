import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema.Types

const SectionSchema = new mongoose.Schema({
  name: String,
  order: Number
}, { timestamps: true })

const ChapterSchema = new mongoose.Schema({
  name: String,
  order: Number,
  sections: [SectionSchema]
}, { timestamps: true })

const NoteBookSchema = new mongoose.Schema({
  title: String,
  desc: String,
  coverUrl: String,
  chapters: [ChapterSchema],
  tags: [ObjectId]
}, { timestamps: true })

const NoteBook = mongoose.model('noteBook', NoteBookSchema)

export default NoteBook
