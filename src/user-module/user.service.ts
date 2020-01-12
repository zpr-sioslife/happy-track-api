import User from './user'
import UserModel from './user.model'

// I'm happy with these auto types TS is defining here DocumentType<User>
// It's a document User for sure and I don't feel I have to state what TS is saying to me.

export function create(data: User) {
  return UserModel.create(data)
}

export function getAll() {
  return UserModel.find()
}

export function getById(id: string) {
  return UserModel.findById(id)
}
