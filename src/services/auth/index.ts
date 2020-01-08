import argon2 from 'argon2'
import jwt from 'jsonwebtoken'
import logger from '../../util/logger'
import {UserInputDTO, UserDTO} from 'interfaces/user'
import UserService from '../user'
import UserModel from '../../models/user'

class AuthService {
  public async SignIn(
    email: string,
    password: string,
  ): Promise<{user: UserDTO; token: string}> {
    const userRecord = await UserModel.findOne({email})

    if (!userRecord) {
      throw new Error('User not registered')
    }

    const validPassword = await argon2.verify(userRecord.password, password)
    if (validPassword) {
      const token = this.generateToken(userRecord)

      const user = userRecord.toObject()
      delete user.password

      return {user, token}
    } else {
      throw new Error('Invalid Password')
    }
  }

  async SignUp(user: UserInputDTO): Promise<{user: UserDTO; token: string}> {
    try {
      const hashedPassword = await argon2.hash(user.password)
      const userRecord = await UserService.createUser({
        ...user,
        password: hashedPassword,
      })

      const token = this.generateToken(userRecord)

      if (!userRecord) {
        throw new Error('User cannot be created')
      }
      Reflect.deleteProperty(userRecord, 'password')
      return {user: userRecord, token}
    } catch (e) {
      logger.error(e)
      throw e
    }
  }

  private generateToken(user: UserDTO): string {
    const today = new Date()
    const exp = new Date(today)

    //expiration date for the token
    exp.setDate(today.getDate() + 60)

    logger.silly(`Sign JWT for userId: ${user._id}`)
    return jwt.sign(
      {
        _id: user._id,
        role: user.role,
        name: user.name,
        exp: exp.getTime() / 1000,
      },
      process.env.JWTSECRET,
    )
  }
}

export default new AuthService()
