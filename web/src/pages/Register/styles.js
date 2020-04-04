import styled from 'styled-components';
import { Form as Unform } from '@unform/web';
import { Link } from 'react-router-dom';
import { colors } from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const BackLink = styled(Link)`
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
`;

export const Title = styled.h1`
  margin: 64px 0 32px;
  font-size: 32px;
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${colors.text};
  line-height: 32px;
`;

export const Form = styled(Unform)`
  width: 100%;
  max-width: 450px;

  input {
    margin-top: 8px;
  }
`;
