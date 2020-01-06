import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: 'string', default: 'default name' },
  password: { type: 'string', required: true },
  email: { type: 'string', required: true, unique: true },
  avatarUrl: { type: 'string', default: 'default_avatar_url' }
})

const User = mongoose.model('user', UserSchema)

export default User
