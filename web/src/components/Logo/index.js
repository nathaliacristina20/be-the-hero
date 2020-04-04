import React from 'react';

import { Container, Image } from './styles';

import logo from '~/assets/logo.svg';

export default function Logo() {
  return (
    <Container>
      <Image src={logo} alt="Be The Hero" />
    </Container>
  );
}
