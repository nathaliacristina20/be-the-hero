'use strict'

const Ong = use('App/Models/Ong')
const crypto = use('crypto')

class OngController {
  /**
   * Show a list of all ongs.
   * GET ongs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const ongs = await Ong
      .query()
      .fetch()
    return ongs
  }

  /**
   * Render a form to be used for creating a new ong.
   * GET ongs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {

  }

  /**
   * Create/save a new ong.
   * POST ongs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['name', 'user_id', 'email', 'whatsapp', 'city', 'uf'])
    const id = crypto.randomBytes(4).toString('HEX')
    const ong = await Ong.create({ id: id, ...data })
    return ong
  }

  /**
   * Display a single ong.
   * GET ongs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing ong.
   * GET ongs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update ong details.
   * PUT or PATCH ongs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a ong with id.
   * DELETE ongs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = OngController
