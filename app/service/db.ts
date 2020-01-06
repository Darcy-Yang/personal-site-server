import mongoose from 'mongoose'

const config = require(`../../config/${process.env.NODE_ENV}.json`)
const { mongoUrl } = config

function initDB() {
  mongoose.connect(mongoUrl, { useNewUrlParser: true })
  .then(
    () => console.info('Mongo Connected!'),
    err => console.info('Mongo Error For Initial Connection: ', err)
  )

  mongoose.connection.on('error', err => console.info('Mongo Error: ', err))
}

export default initDB
