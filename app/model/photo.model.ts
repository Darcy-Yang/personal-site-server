import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema.Types

const PhotoSchema = new mongoose.Schema({
  url: String,
  profile: {
    author: { type: ObjectId, description: 'userId of author' },
    desc: String,
    createdAt: String,
    location: String
  },
  tagIds: [ObjectId],
  commentIds: [ObjectId]
}, { timestamp: true })

const Photo = mongoose.model('photo', PhotoSchema)

export default Photo
