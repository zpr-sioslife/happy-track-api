import {prop, modelOptions} from '@typegoose/typegoose'

/**
 * Hmm which one? eg:
 *
 * const user = UserModel.create({..., role: 'USER'}) --> type Roles
 *  or
 * import {Roles} from '../user';
 * const user = UserModel.create({..., role: Roles.User}) --> enum Roles
 *
 * Both are statically typed
 */
type Roles = 'USER' | 'MANAGER'
// enum Roles { User = 'USER', Manager = 'MANAGER' }

// These options are being set in user.model.ts
// I'm doing there just to not put much logic in here
// @modelOptions({
//   schemaOptions: {
//     timestamps: true,
//     toJSON: {transform: () => {}},
//   },
// })
class User {
  @prop({required: true, trim: true})
  name: string

  @prop({required: true, unique: false, trim: true, lowercase: true})
  email: string

  // unreadable password
  @prop({required: true, select: false})
  hashedPassword: string

  @prop({
    required: true,
    enum: ['MANAGER', 'USER'] as Roles[],
    default: 'USER' as Roles,
    // enum: Roles,
    // default: Roles.User,
  })
  role: Roles
}

// 2 things because we using typegoose:
// - Creates the 'User' Mongo Schema
// - We can use 'User' has a type
export default User
