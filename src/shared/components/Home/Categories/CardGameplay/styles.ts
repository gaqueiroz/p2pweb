import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #1b2026;
  border: 2px solid #1b2026;
  gap: 2;
  padding-bottom: 30px;
  padding-top: 30px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.2s;

  &:hover {
    background-color: #191a1d;
    cursor: pointer;
    border-color: #fff;
  }

  .info {
    margin-top: 20px;
  }

  .date {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;