import mongoose from 'mongoose'
import * as typegoose from '@typegoose/typegoose'
import User from './user'

// Don't return hashed password when sending data to the client
function toJson(doc: mongoose.Document, ret: User) {
  const {hashedPassword, ...rest} = ret

  return rest
}

// UserModel is a regular Mongoose Model with correct types
const UserModel = typegoose.getModelForClass(User, {
  schemaOptions: {
    timestamps: true,
    toJSON: {
      transform: toJson,
    },
  },
})

export default UserModel
