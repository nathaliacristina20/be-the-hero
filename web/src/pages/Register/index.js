import React, { useRef } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import {
  Container,
  Content,
  Section,
  Title,
  Text,
  Form,
  BackLink,
} from './styles';
import history from '~/services/history';
import Logo from '~/components/Logo';
import Input from '~/components/Input';
import Button from '~/components/Button';

export default function Register() {
  const formRef = useRef(null);

  const schema = Yup.object().shape({
    name: Yup.string().required('O email eh obrigatorio'),
    email: Yup.string().email().required('O email eh obrigatorio'),
    password: Yup.string().min(6).required('Campo obrigatorio'),
    whatsapp: Yup.string().required('Campo obrigatorio'),
    city: Yup.string().required('Campo obrigatorio'),
    uf: Yup.string().max(2).required('Campo obrigatorio'),
  });

  async function handleSubmit(data) {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });
      console.log(data);

      history.push('/');

      toast.success('Cadastro realizado com sucesso!');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.tron.log(err);
        const errorMessages = {};
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        formRef.current.setErrors(errorMessages);
      }
    }
  }

  function clearField(ref) {
    if (formRef && formRef.current) {
      formRef.current.setFieldError(ref, null);
    }
  }

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

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            placeholder="Nome da ONG"
            onFocus={() => clearField('name')}
            autoFocus
          />
          <Input
            name="email"
            type="email"
            placeholder="E-mail"
            onFocus={() => clearField('email')}
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            onFocus={() => clearField('password')}
          />
          <Input
            name="whatsapp"
            type="text"
            placeholder="Whatsapp"
            onFocus={() => clearField('whatsapp')}
          />
          <div className="input-group">
            <Input
              name="city"
              type="text"
              placeholder="Cidade"
              onFocus={() => clearField('city')}
            />
            <Input
              name="uf"
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              onFocus={() => clearField('uf')}
            />
          </div>
          <Button type="submit" text="Cadastrar" />
        </Form>
      </Content>
    </Container>
  );
}
