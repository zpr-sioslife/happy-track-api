import express from 'express'
import userRouter from './user-module/user.router'

const routes = express.Router()

/** API ROUTES */
routes.use('/users', userRouter)
// routes.use('/notes', noteRouter)

export default routes
