'use strict'

const Incident = use('App/Models/Incident')

const AppError = use('App/Exceptions/AppError')

class DestroyIncidentService {
  async execute ({ id, userId }) {
    try {
      const incident = await Incident.findOrFail(id)

      if (incident.user_id !== userId) {
        throw new AppError('Operation not permitted', 401)
      }

      await incident.delete()
    } catch (err) {
      throw new AppError('Incident not found', 404)
    }
  }
}

module.exports = DestroyIncidentService
