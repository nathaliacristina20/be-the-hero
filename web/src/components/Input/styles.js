import styled from 'styled-components';
import { input } from '~/styles/colors';

export const Container = styled.div`
  input {
    width: 100%;
    height: 60px;
    color: ${input.color};
    border: 1px solid ${input.border};
    border-radius: 8px;
    padding: 0 24px;
  }
`;
