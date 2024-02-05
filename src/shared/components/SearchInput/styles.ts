import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  padding-top: 94px;

  input {
    width: 100%;
    background-color: #191a1d;
    border: 1px solid #262629;
    color: ${({ theme }) => theme.colors.onPrimary};
    padding: 10px;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    font-size: 17px;
    padding: 18px;
    transition: all 0.2s;

    &:hover {
      border-color: #fff;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.onPrimary};
      opacity: 1;
    }

    &::-ms-input-placeholder {
      color: ${({ theme }) => theme.colors.onPrimary};
    }
  }


`;