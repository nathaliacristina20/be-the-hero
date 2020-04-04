import styled from 'styled-components';

import { Form as Unform } from '@unform/web';
import { colors } from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled(Unform)`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  a {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: ${colors.title};
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ContentForm = styled.div`
  margin-top: 100px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;
`;
