import styled from "styled-components";
import { ContainerStyle } from "../../Container/styles";

export const Container = styled(ContainerStyle)`

  width: 100%;
  /* background: #606060; */
  /* position: fixed; */
  padding-bottom: 26px;
  padding-top: 26px;

  .content {
    display: flex;
    margin-left: 30px;
    margin-right: 30px;

    .logo-content {
      display: flex;
      align-items: center;
    }

    .nav-items {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;

      .nav-item {
        margin-right: 10px;
        margin-left: 10px;

        a {
          text-decoration: none;
           color: #FFFF;
           font-weight: bold;
           transition: all 0.3s ease-in 0s;

           &:hover {
            color: ${({ theme }) => theme.colors.primary};
            border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
            padding-bottom: 8px;
           }
        }
      }
    }

    .nav-options {
      display: flex;
    }
  }
`;
