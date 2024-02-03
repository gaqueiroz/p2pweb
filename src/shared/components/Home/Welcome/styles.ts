import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #FFF;
  color: #000;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid #262629;
  padding: 27px;

  h1 {
    font-size: 34px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
  }

  h2 {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 18px;
  }
`;