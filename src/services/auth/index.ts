import argon2 from 'argon2'
import jwt from 'jsonwebtoken'
import {randomBytes} from 'crypto'
import logger from '../../util/logger'
import {UserInputDTO, UserDTO} from 'interfaces/user'
import UserService from '../user'

class AuthService {
  public async SignUp(
    user: UserInputDTO,
  ): Promise<{user: UserDTO; token: string}> {
    try {
      const salt = randomBytes(32)
      const hashedPassword = await argon2.hash(user.password, {salt})
      const userRecord = await UserService.createUser({
        ...user,
        salt: salt.toString('hex'),
        password: hashedPassword,
      })

      const token = this.generateToken(userRecord)

      if (!userRecord) {
        throw new Error('User cannot be created')
      }
      const userCreated = userRecord.toObject()
      Reflect.deleteProperty(userCreated, 'password')
      Reflect.deleteProperty(userCreated, 'salt')
      return {user: userCreated, token}
    } catch (e) {
      logger.error(e)
      throw e
    }
  }

  private generateToken(user: UserDTO) {
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
