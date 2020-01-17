/**
 * A one-way entry to be refered from outside from this module
 * Other modules use this file has main import'er
 * eg: import {userRouter, userCtrl} from '#user-module'
 */
export {default as User} from './user'
// export {default as UserModel} from './user.model' // Doesn't make sense to be 'public' since UserService exists
export {default as UserRouter} from './user.router'
export * as UserCtrl from './user.controller'
export * as UserService from './user.service'
