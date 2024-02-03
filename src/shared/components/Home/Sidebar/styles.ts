import styled from "styled-components";

export const Container = styled.div`
  background: #191a1d;
  border: 1px solid #262629;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 27px;
  height: 75vh;
  width: 240px;

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
