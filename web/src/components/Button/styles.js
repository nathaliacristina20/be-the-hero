import styled, { css } from 'styled-components';
import { colors, buttons } from '~/styles/colors';

export const Container = styled.div`
  button {
    width: 100%;
    height: 60px;
    background: ${buttons.default};
    border: 0;
    border-radius: 8px;
    color: ${colors.white};
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

    ${(props) =>
      props &&
      css`
        color: ${props.color};
        background: ${props.background};
        width: ${props.width}px;
        height: ${props.height}px;
        text-transform: ${props.textTransform};
      `}
  }
`;

export const Btn = styled.button``;

export const Text = styled.div`
  display: flex;
  justify-content: center;
`;
