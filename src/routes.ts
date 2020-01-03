import {Router} from 'express'
import UserApi from './controllers/user'
import HeartBeatApi from './controllers/heart-beat'

const routes = Router()

routes.use(HeartBeatApi)
routes.use(UserApi)

export default routes
