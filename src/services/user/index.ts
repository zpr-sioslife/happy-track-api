import User from '../../models/user'
import {UserInputDTO} from '../../interfaces/user'

class UserService {
  public getAllUsers() {
    return User.find()
  }

  public createUser(userData: UserInputDTO) {
    return User.create(userData)
  }
}

export default new UserService()
