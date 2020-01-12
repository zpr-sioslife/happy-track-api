import express from 'express'
import * as userCtrl from './user.controller'

const userRouter = express.Router()

userRouter
  .route('/')
  .post(userCtrl.createUser)
  .get(userCtrl.getUsers)

export default userRouter
