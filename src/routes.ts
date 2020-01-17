import express from 'express'
import {UserRouter} from '#user-module'

const routes = express.Router()

/** API ROUTES */
routes.use('/users', UserRouter)
// routes.use('/notes', noteRouter)

export default routes
