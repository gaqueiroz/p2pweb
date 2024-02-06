import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 272.83px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: #1b2026;
  border: 1px solid #8b8c8c1f;
  gap: 2;
  padding-top: 30px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.2s;

  .teams {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    span {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 12px;
      font-weight: bold;
      margin-top: 14px;
    }
  }

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