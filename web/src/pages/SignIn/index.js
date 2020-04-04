import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Container, Form, ContentForm, Title } from './styles';

import Logo from '~/components/Logo';
import heroes from '~/assets/heroes.png';
import Button from '~/components/Button';
import Input from '~/components/Input';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const schema = Yup.object().shape({
    email: Yup.string().required('O email eh obrigatorio'),
    password: Yup.string().required('Campo obrigatorio'),
  });

  async function handleSubmit(data) {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });
      dispatch(signInRequest(data.email, data.password));
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
    formRef.current.setFieldError(ref, null);
  }

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Logo />
        <ContentForm>
          <Title>Faça seu login</Title>
          <Input
            name="email"
            type="email"
            placeholder="E-mail"
            onFocus={() => clearField('email')}
            autoFocus
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            onFocus={() => clearField('password')}
          />
          <Button type="submit" text="Entrar" />
          <Link to="/cadastro">Não tenho cadastro</Link>
        </ContentForm>
      </Form>
      <img src={heroes} alt="Heroes" />
    </Container>
  );
}
