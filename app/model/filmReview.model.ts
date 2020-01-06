import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema.Types

const FilmReviewSchema = new mongoose.Schema({
  title: String,
  content: String,
  profile: {
    name: String,
    director: String,
    posterUrl: String,
    createdAt: String
  },
  tagIds: [ObjectId],
  commentIds: [ObjectId]
}, { timestamp: true })

const FilmReview = mongoose.model('filmReview', FilmReviewSchema)

export default FilmReview
