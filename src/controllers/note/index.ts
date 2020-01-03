import {Router, Response, Request} from 'express'
import NoteController from './controller'

function NoteRouter(): Router {
  const router = Router()

  router.route('/notes').post((req: Request, res: Response) => {
    const noteCreated = NoteController.createNote(req.body)
    return res.json(noteCreated)
  })

  return router
}

export default NoteRouter()
