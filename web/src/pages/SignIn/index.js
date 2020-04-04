import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Logo, ContentForm, Title } from './styles';

import logo from '~/assets/logo.svg';
import heroes from '~/assets/heroes.png';
import Button from '~/components/Button';
import Input from '~/components/Input';

const link = '';

export default function SignIn() {
  return (
    <Container>
      <Form>
        <Logo src={logo} alt="Be The Hero" />
        <ContentForm>
          <Title>Faça seu login</Title>
          <Input name="userid" type="text" placeholder="Seu ID" />
          <Button type="submit" text="Entrar" />
          <Link to={link}>Não tenho cadastro</Link>
        </ContentForm>
      </Form>
      <img src={heroes} alt="Heroes" />
    </Container>
  );
}
