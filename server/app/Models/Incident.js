'use strict'

const Model = use('Model')

class Incident extends Model {
  users () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Incident
