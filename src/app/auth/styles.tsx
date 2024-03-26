"use client"

import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 400px;
  margin: auto;

  .auth-content {
    width: 100%;
    text-align: center;
  }

  form {
    h1 {
      margin-bottom: ${({ theme }) => theme.spacing.lg};
      margin-top: ${({ theme }) => theme.spacing.lg};
    }
  }
`;