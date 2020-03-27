'use strict'

const Model = use('Model')

class Ong extends Model {
  users () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Ong
