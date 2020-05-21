'use strict'

const UserService = use('App/Services/CreateUserService')
class UserController {
  async store ({ request, response, auth }) {
    const data = request.only(['email', 'password', 'provider', 'city', 'uf', 'whatsapp', 'document', 'type_document', 'name'])

    const createUser = new UserService()
    const user = await createUser.execute(data)
    return user
  }
}

module.exports = UserController
