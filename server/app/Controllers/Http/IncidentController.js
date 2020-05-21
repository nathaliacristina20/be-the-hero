'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Incident = use('App/Models/Incident')

const CreateIncidentService = use('App/Services/CreateIncidentService')
const DestroyIncidentService = use('App/Services/DestroyIncidentService')

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
      .with('user')
      .limit(5)
      .offset((page - 1) * 5)
      .fetch()

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

    const createIncident = new CreateIncidentService()
    const incident = await createIncident.execute({ ...data, user_id: userId })

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
    const incident = await Incident
      .query()
      .where('id', params.id)
      .with('user')
      .fetch()

    return incident
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
  async destroy ({ params, request, response, auth }) {
    const userId = auth.jwtPayload.uid

    const destroyIncident = new DestroyIncidentService()
    const incident = await destroyIncident.execute({ id: params.id, userId })

    return incident
  }
}

module.exports = IncidentController
