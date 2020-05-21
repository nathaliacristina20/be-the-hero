'use strict'

const Incident = use('App/Models/Incident')

class CreateIncidentService {
  async execute (data) {
    const incident = await Incident.create(data)
    return incident
  }
}
module.exports = CreateIncidentService
