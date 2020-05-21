'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.uuid('id').primary()
      table.string('name', 254).notNullable()
      table.string('document', 14).notNullable().unique()
      table.string('type_document', 10).notNullable()
      table.string('whatsapp', 11).unique().notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('city', 20).notNullable()
      table.string('uf', 2).notNullable()
      table.boolean('provider').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
