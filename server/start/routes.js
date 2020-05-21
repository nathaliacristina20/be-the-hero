'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.store').validator('StoreUser')

Route.post('/sessions', 'SessionController.store').validator('StoreSession')

Route.group(() => {
  Route.post('/incidents', 'IncidentController.store')
  Route.get('/incidents', 'IncidentController.index')
  Route.get('/incidents/:id', 'IncidentController.show')
  Route.delete('/incidents/:id', 'IncidentController.destroy')

  Route.get('/profile', 'ProfileController.index')
}).middleware(['auth'])
