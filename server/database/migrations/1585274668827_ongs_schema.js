'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IncidentsSchema extends Schema {
  up () {
    this.create('ongs', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('whatsapp').notNullable()
      table.string('city').notNullable()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('ongs')
  }
}

module.exports = IncidentsSchema
