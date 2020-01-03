import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema(
  {
    title: {type: String, required: true, unique: true},
    description: {type: String, required: true, unique: true},
    rating: {type: Number, required: true, min: 1, max: 5},
  },
  {timestamps: true},
)

export default mongoose.model('Note', NoteSchema)
