import User from '../../models/user'
import {UserInputDTO, UserDTO} from '../../interfaces/user'

class UserService {
  public getAllUsers() {
    return User.find()
  }

  public createUser(userData: UserInputDTO): Promise<UserDTO> {
    return User.create(userData)
  }
}

export default new UserService()
