'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IncidentsSchema extends Schema {
  up () {
    this.create('incidents', (table) => {
      table.uuid('id').primary()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.decimal('value')
      table
        .uuid('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
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
