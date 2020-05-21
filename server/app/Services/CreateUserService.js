'use strict'

const User = use('App/Models/User')

class CreateUserService {
  async execute (data) {
    const user = await User.create(data)
    return user
  }
}
module.exports = CreateUserService
