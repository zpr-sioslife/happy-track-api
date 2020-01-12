import express from 'express'
import cors from 'cors'
import config from './config'
import logger from './util/logger'
import routes from './routes'

// db connection
import './database'

const app = express()

/** MIDDLEWARES */
app.use([
  // Enable all Cross-origin resource sharing
  cors(),

  // support parsing of application/json type post data
  express.json(),

  //support parsing of application/x-www-form-urlencoded post data
  express.urlencoded({extended: true}),

  // App Routing
  routes,
])

/** START SERVER */
app.listen(config.port, () => {
  logger.info(`Running on port ${config.port} in ${config.env} mode`)
})
