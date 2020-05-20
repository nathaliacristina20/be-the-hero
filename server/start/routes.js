'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.store')

Route.post('/sessions', 'SessionController.store').validator('Session')

Route.group(() => {
  Route.post('/ongs', 'OngController.store')
  Route.get('/ongs', 'OngController.index')

  Route.post('/incidents', 'IncidentController.store')
  Route.get('/incidents', 'IncidentController.index')
  Route.delete('/incidents/:id', 'IncidentController.destroy')

  Route.get('/profile', 'ProfileController.index')
}).middleware(['auth'])
