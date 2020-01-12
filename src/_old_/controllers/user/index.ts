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
  router.route('/login').post(
    async (req: Request, res: Response): Promise<Response> => {
      const userLogged = await AuthService.SignIn(
        req.body.email,
        req.body.password,
      )

      return res.json(userLogged)
    },
  )

  return router
}

export default UserRouter()
