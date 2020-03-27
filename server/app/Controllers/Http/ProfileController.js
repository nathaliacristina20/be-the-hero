'use strict'

const Incident = use('App/Models/Incident')

class ProfileController {
  /**
   * Show a list of all ongs.
   * GET ongs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, auth, view }) {
    const userId = auth.jwtPayload.uid
    const incidents = await Incident
      .query()
      .where('user_id', userId)
      .fetch()
    return incidents
  }
}

module.exports = ProfileController
