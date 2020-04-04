import React from 'react';

import { Container, Text, Btn } from './styles';

export default function Button({ type, text, icon, ...rest }) {
  return (
    <Container {...rest}>
      <Btn type={type}>
        <Text>{text}</Text>
      </Btn>
    </Container>
  );
}
