import Koa from 'koa'
import router from './router'
import initDB from './service/db'

const app = new Koa()
const config = require(`../config/${process.env.NODE_ENV}.json`)
const { port } = config

initDB()
app.use(router.routes())

app.listen(port, () => console.info(`App run at ${port} port.`))
