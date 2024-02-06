import styled, { css } from "styled-components";

interface IContainer {
  enabledNavbarFixedStyle: boolean;
}

export const Container = styled.div<IContainer>`
  background: #1b2026;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 27px;
  height: 76vh;
  width: 240px;
  border: 1px solid #8b8c8c1f;

  ${({ enabledNavbarFixedStyle }) =>
     enabledNavbarFixedStyle &&
      css`
        position: fixed;
        top: 110px;
        width: 208.7px!important;
        height: 85vh;
      `}

  ul {
    li {
      margin-bottom: 30px;
      display: flex;
      align-items: center;

      svg {
        margin-right: 14px;
      }

      a {
        text-decoration: none;
        color: #fff;
        transition: all 1.2s;
      }

      &:hover {
        a {
          color: ${({ theme }) => theme.colors.primary};
          width: 100%;
        }

        svg {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;
