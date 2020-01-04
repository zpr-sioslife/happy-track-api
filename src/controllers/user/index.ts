import {Router, Response, Request} from 'express'
import UserService from '../../services/user'
import AuthService from '../../services/auth'

function UserRouter(): Router {
  const router = Router()

  router
    .route('/users')
    .get(
      async (req: Request, res: Response): Promise<Response> => {
        const users = await UserService.getAllUsers()

        return res.json(users)
      },
    )
    .post(
      async (req: Request, res: Response): Promise<Response> => {
        const userCreated = await AuthService.SignUp(req.body)

        return res.json(userCreated)
      },
    )
  return router
}

export default UserRouter()
