import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, ContentForm, Title } from './styles';

import Logo from '~/components/Logo';
import heroes from '~/assets/heroes.png';
import Button from '~/components/Button';
import Input from '~/components/Input';

export default function SignIn() {
  return (
    <Container>
      <Form>
        <Logo />
        <ContentForm>
          <Title>Faça seu login</Title>
          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="password" type="password" placeholder="Senha" />
          <Button type="submit" text="Entrar" />
          <Link to="/cadastro">Não tenho cadastro</Link>
        </ContentForm>
      </Form>
      <img src={heroes} alt="Heroes" />
    </Container>
  );
}
