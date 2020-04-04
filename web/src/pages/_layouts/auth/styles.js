import styled from 'styled-components';
import { colors } from '~/styles/colors';

export const Container = styled.div``;

export const Wrapper = styled.div`
  background: ${colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
`;
