import {Router, Response, Request} from 'express'
import UserController from './controller'

function UserRouter(): Router {
  const router = Router()

  router.route('/users').get(
    async (req: Request, res: Response): Promise<Response> => {
      const users = await UserController.getAllUsers()

      return res.json(users)
    },
  )

  return router
}

export default UserRouter()
