import Note from '../../models/note'

// move this to a proper place for interfaces
interface NoteDTO {
  title: string
  description: string
  rating: number
}

class UserController {
  public createNote(noteData: NoteDTO) {
    return Note.create(noteData)
  }
}

export default new UserController()
