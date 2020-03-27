'use strict'

const Model = use('Model')

class Incident extends Model {
  ongs () {
    return this.belongsTo('App/Models/Ong')
  }
}

module.exports = Incident
