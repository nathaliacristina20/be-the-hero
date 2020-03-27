'use strict'

const crypto = use('crypto')

const User = use('App/Models/User')

class UserController {
  async store ({ request, response, auth }) {
    const data = request.only(['username', 'email', 'password', 'provider'])
    const id = crypto.randomBytes(4).toString('HEX')
    const user = await User.create({ id, ...data })
    return user
  }
}

module.exports = UserController
