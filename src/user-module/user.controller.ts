import type express from 'express'
import argon2 from 'argon2'
import * as UserService from './user.service'
import type User from './user'

// hmm can we refactor better ? More TS complicated?
// For every router I have to set this ?? hmm
interface UsersPostRequest extends express.Request {
  body: {
    name: string
    email: string
    password: string
  }
}
// ensure the json return is an User
interface UsersPostResponse extends express.Response {
  json(user: User): this
}

// 'Strongly' Typed from the params and the actual return
export async function createUser(
  req: UsersPostRequest,
  res: UsersPostResponse,
): Promise<UsersPostResponse> {
  const {name, email, password} = req.body // <-- typed

  // TODO: Hash generator shouldn't be here, move it elsewhere.
  // Move it to user.service or Mongoose Model events(pre-save) to ensure rigidity
  const hashedPassword = await argon2.hash(password)

  const user = await UserService.create({
    name,
    email,
    hashedPassword,
    role: 'USER', // <- Gets typed
  })

  console.log(user.id)
  console.log(user.hashedPassword)

  return res.json(user)
}

// Generic example. Not strongly typed
export async function getUsers(
  req: express.Request,
  res: express.Response,
): Promise<express.Response> {
  // this way,for example, req.body/req.params types are any
  const users = await UserService.getAll()

  return res.json(users)
  // I could return this since the Promise<Response> is too generic
  // return res.json('hello')
}
