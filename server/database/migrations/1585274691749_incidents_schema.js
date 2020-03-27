'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IncidentsSchema extends Schema {
  up () {
    this.create('incidents', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.decimal('value').notNullable()
      table
        .string('ong_id')
        .unsigned()
        .references('id')
        .inTable('ongs')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('incidents')
  }
}

module.exports = IncidentsSchema
