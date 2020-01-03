import User from '../../models/user'

class UserController {
  public getAllUsers() {
    return User.find()
  }
}

export default new UserController()
