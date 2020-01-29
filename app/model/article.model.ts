import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema.Types

const ArticleSchema = new mongoose.Schema({
  title: { type: 'string', default: 'default title' },
  content: String,
  profile: {
    author: { type: ObjectId, description: 'userId of author' },
    posterUrl: String,
    desc: String
  },
  tagIds: [ObjectId],
  commentIds: [ObjectId]
}, { timestamps: true })

const Article = mongoose.model('article', ArticleSchema)

export default Article
