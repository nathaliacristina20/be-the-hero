import React from 'react';

import { Container, Form, Title } from './styles';

import logo from '../../assets/logo.svg';
import heroes from '../../assets/heroes.png';

export default function SignIn() {
  return (
    <Container>
      <Form>
        <img src={logo} alt="Be The Hero" />
        <form action="">
          <Title>Faça seu login</Title>
          <input type="text" placeholder="Sua ID" />
          <button type="submit">Entrar</button>
          <a href="/register">Não tenho cadastro</a>
        </form>
      </Form>
      <img src={heroes} alt="Heroes" />
    </Container>
  );
}
