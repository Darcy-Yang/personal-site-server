import Koa from 'koa'
import router from './router'
const config = require(`../config/${process.env.NODE_ENV}.json`)

const { port } = config

const app = new Koa()
app.use(router.routes())
/**
 * initRouter()
 * initDB()
 */

app.listen(port, () => console.info(`App run at ${port} port.`))
