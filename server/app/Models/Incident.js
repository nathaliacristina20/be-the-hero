'use strict'

const Model = use('Model')

class Incident extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeCreate', 'IncidentHook.uuid')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Incident
