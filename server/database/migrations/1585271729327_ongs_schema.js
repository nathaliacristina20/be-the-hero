'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('ongs', (table) => {
      table.string('id').primary()
      table.string('name').notNullable().unique()
      table.string('whatsapp').notNullable().unique()
      table.string('city').notNullable()
      table.string('uf', 2).notNullable()
      table
        .string('user_id')
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

module.exports = UserSchema
