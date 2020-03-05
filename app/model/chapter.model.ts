import mongoose from 'mongoose'

const ChapterSchema = new mongoose.Schema({
  title: String,
  desc: String,
  order: { type: Number, default: 0, unique: true },
})

const Chapter = mongoose.model('chapter', ChapterSchema)

export default Chapter
