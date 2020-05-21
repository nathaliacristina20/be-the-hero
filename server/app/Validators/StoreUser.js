'use strict'

const { rule } = use('Validator')

const Antl = use('Antl')
class StoreUser {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required',
      email: 'required|email|unique:users',
      password: 'required|confirmed',
      city: [
        rule('required'),
        rule('string')],
      uf: [
        rule('required'),
        rule('min', 2),
        rule('max', 2),
        rule('string')],
      whatsapp: 'required|unique:users',
      provider: 'required',
      document: [
        rule('required'),
        rule('max', 14),
        rule('string')],
      type_document: 'required'
    }
  }

  // 'required_when:role_id,1|required_when:role_id,2',

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = StoreUser
