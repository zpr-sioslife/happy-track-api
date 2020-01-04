import {Schema, model, Document} from 'mongoose'
import {UserDTO} from '../../interfaces/user'

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a full name'],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },
    password: String,
    salt: String,
    role: {
      type: String,
      default: 'user',
    },
  },
  {timestamps: true},
)

export default model<UserDTO & Document>('User', UserSchema)
