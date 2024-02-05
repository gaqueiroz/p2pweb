import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 272.83px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #1b2026;
  border: 1px solid #1b2026;
  gap: 2;
  /* padding-bottom: 30px; */
  padding-top: 30px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.2s;


  .info {
    margin-top: 20px;
  }

  .date {
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16;
    padding-left: 30px;
    padding-right: 30px;
    color: #fff;
    display: "flex"
  }
`;

export const BetButton = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 10px;
  width: 80px !important;
  color: #fff;
  margin-bottom: 12px;


  &:hover {
    background-color: #191a1d;
    cursor: pointer;
    border-color: #fff;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

`;