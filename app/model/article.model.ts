import mongoose from 'mongoose'

const ArticleSchema = new mongoose.Schema({
  title: { type: 'string', default: 'default title' },
  content: String,
}, { timestamps: true })

const Article = mongoose.model('article', ArticleSchema)

export default Article
