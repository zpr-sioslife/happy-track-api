import {Router, Response, Request} from 'express'
import NoteService from '../../services/note'

function NoteRouter(): Router {
  const router = Router()

  router.route('/notes').post((req: Request, res: Response) => {
    const noteCreated = NoteService.createNote(req.body)
    return res.json(noteCreated)
  })

  return router
}

export default NoteRouter()
