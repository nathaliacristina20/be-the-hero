import styled from 'styled-components';

import { Form as Unform } from '@unform/web';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled(Unform)`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  form {
    margin-top: 100px;

    input {
      width: 100%;
      height: 60px;
      color: #333;
      border: 1px solid #dcdce6;
      border-radius: 8px;
      padding: 0 24px;
    }

    button {
      width: 100%;
      height: 60px;
      background: #e02041;
      border: 0;
      border-radius: 8px;
      color: #fff;
      font-weight: 700;
      margin-top: 16px;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      font-size: 18px;
      line-height: 60px;
      transition: filter 0.2s;
      cursor: pointer;

      &:hover {
        filter: brightness(90%);
      }
    }

    a {
      display: flex;
      align-items: center;
      margin-top: 40px;
      color: #41414d;
      font-size: 18px;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
      svg {
        margin-right: 8px;
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;
`;
