import express from 'express'
import * as UserCtrl from './user.controller'

const UserRouter = express.Router()

UserRouter.route('/')
  .post(UserCtrl.createUser)
  .get(UserCtrl.getUsers)

export default UserRouter
