'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Incident = use('App/Models/Incident')

/**
 * Resourceful controller for interacting with incidents
 */
class IncidentController {
  /**
   * Show a list of all incidents.
   * GET incidents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, params, response, view }) {
    const { page = 1 } = params

    const [count] = await Incident
      .query()
      .count()

    response.header('X-Total-Count', count.count)

    const incidents = await Incident
      .query()
      .with('ongs')
      .limit(5)
      .offset((page - 1) * 5)
      .fetch()

    // const incidents = await Incident
    //   .query()
    //   .limit(5)
    //   .offset((page - 1) * 5)
    //   .fetch()

    return incidents
  }

  /**
   * Render a form to be used for creating a new incident.
   * GET incidents/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new incident.
   * POST incidents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const data = request.only(['title', 'description', 'value'])
    const userId = auth.jwtPayload.uid
    const incident = await Incident.create({ ...data, user_id: userId })
    return incident
  }

  /**
   * Display a single incident.
   * GET incidents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing incident.
   * GET incidents/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update incident details.
   * PUT or PATCH incidents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a incident with id.
   * DELETE incidents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const ongId = '94374a4f'

    const incident = await Incident
      .findOrFail(params.id)

    if (incident.ong_id !== ongId) {
      return response.status(401).json({ error: 'Operation not permitted' })
    }

    await incident.delete()
  }
}

module.exports = IncidentController
