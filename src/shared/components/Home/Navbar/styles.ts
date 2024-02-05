import styled, { css } from "styled-components";
import { ContainerStyle } from "../../Container/styles";

interface IContainer {
  enabledFixedStyle: boolean;
}

export const Container = styled.div<IContainer>`
  width: 100%;
  position: fixed;
  padding-bottom: 26px;
  padding-top: 26px;
  background-color: ${(props) => props.enabledFixedStyle ? '#191a1d' : 'tranparent'};
  transition: all 0.3s;

  ${({ enabledFixedStyle }) =>
     enabledFixedStyle &&
      css`
        border-bottom: 4px solid;
        border-image: linear-gradient(to right, #0ad692, #ff4500); /* Substitua as cores conforme necessário */
        border-image-slice: 1;
      `}

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
