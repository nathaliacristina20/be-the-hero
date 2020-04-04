import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import Register from '~/pages/Register';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/cadastro" component={Register} />
      <Route path="/perfil" isPrivate component={Profile} />
    </Switch>
  );
}
