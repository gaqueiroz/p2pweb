import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  input {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.xs};
    /* font-size: 20px;
    background-color: transparent;
    border: 2px solid #fff;
     */
    border: 2px solid #262629;
    border-radius: ${({ theme }) => theme.borderRadius.md};
    background: #191a1d;
    height: 56px;
    padding: 0 24px;
    font-size: 16px;
    line-height: 26px;
    color: #FFF;
    transition: all 0.5s;

    &::placeholder {
      color: #FFF;
      opacity: 1;
    }

    &::-ms-input-placeholder {
      color: #FFF;
    }

    &:hover {
      border-color: #FFF;
    }

    &:focus {
      border-color: #FFF;
    }
  }
`;