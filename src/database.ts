import mongoose from 'mongoose'
import config from './config'
import logger from './util/logger'

/** DATABASE CONNECT */
mongoose
  .connect(
    // connection URL
    `mongodb://${config.database.host}:${config.database.port}/${config.database.name}`,
    // mongoose options
    {
      // Use the new MongoDB driver connection string parser.
      useNewUrlParser: true,
      // MongoDB driver deprecated ensureIndex() function in favor of createIndex()
      useCreateIndex: true,
      // use the MongoDB driver's new connection management engine.
      useUnifiedTopology: true,
    },
  )
  .then(res => {
    logger.info(`Connected to Mongo DB: ${config.database.name}`)
  })
  .catch(err => logger.error(err))
