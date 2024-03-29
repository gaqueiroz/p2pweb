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
  background-color: ${(props) => props.enabledFixedStyle ? '#1b2026' : 'tranparent'};
  transition: all 0.3s;
  z-index: 10;
  justify-content: center;

  ${({ enabledFixedStyle }) =>
     enabledFixedStyle &&
      css`
        /* border-bottom: 2px solid;
        border-image: linear-gradient(to right, #0ad692, #FFF);
        border-image-slice: 1; */
        box-shadow: 0px 10px 15px -3px rgb(0 0 0 / 30%);
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
      align-items: center;
      justify-content: flex-end;
    }
  }
`;
