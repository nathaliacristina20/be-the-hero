const { test, trait } = use('Test/Suite')('Session')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Factory')} */
const Factory = use('Factory')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User')

trait('Test/ApiClient')

test('it should return JWT token when session created', async ({ client, assert }) => {
  const sessionPayload = {
    email: 'nathaliacristina20@hotmail.com',
    password: '123456',
    username: 'adoteumgatinho',
    provider: true
  }

  await Factory
    .model('App/Models/User')
    .create(sessionPayload)

  const response = await client.post('/sessions').send(sessionPayload).end()

  await response.assertStatus(200)
  assert.exists(response.body.token)
})
