'use strict'

const uuidv4 = require('uuid/v4')

const IncidentHook = exports = module.exports = {}

IncidentHook.uuid = async (incident) => {
  incident.id = uuidv4()
}
