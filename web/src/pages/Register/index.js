import React from 'react';
import {
  Container,
  Content,
  Section,
  Title,
  Text,
  Form,
  BackLink,
} from './styles';

import Logo from '~/components/Logo';
import Input from '~/components/Input';
import Button from '~/components/Button';

export default function Register() {
  return (
    <Container>
      <Content>
        <Section>
          <Logo />
          <Title>Cadastro</Title>
          <Text>
            Faca seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </Text>
          <BackLink to="/">Já tenho cadastro</BackLink>
        </Section>

        <Form>
          <Input name="ong.name" type="text" placeholder="Nome da ONG" />
          <Input name="ong.email" type="email" placeholder="E-mail" />
          <Input name="ong.email" type="password" placeholder="Senha" />
          <Input name="ong.whatsapp" type="text" placeholder="Whatsapp" />
          <div className="input-group">
            <Input name="ong.city" type="text" placeholder="Cidade" />
            <Input
              name="ong.uf"
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
            />
          </div>
          <Button type="submit" text="Cadastrar" />
        </Form>
      </Content>
    </Container>
  );
}
