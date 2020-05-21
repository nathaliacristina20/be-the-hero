'use strict'

const uuidv4 = require('uuid/v4')

const UserHook = exports = module.exports = {}

UserHook.uuid = async (user) => {
  user.id = uuidv4()
}
