import Note from '../../models/note'
import {NoteDTO} from '../../interfaces/note'

class NoteService {
  public createNote(noteData: NoteDTO) {
    return Note.create(noteData)
  }
}

export default new NoteService()
