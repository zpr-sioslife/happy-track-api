export interface UserDTO {
  _id: string
  name: string
  email: string
  password: string
  role: string
}

export interface UserInputDTO {
  email: string
  name: string
  password: string
  salt: string
}
