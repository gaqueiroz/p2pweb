import { ButtonHTMLAttributes, ReactNode } from "react";

import { ThemeColors } from "styled-components";

import { FCWithChildren } from "~/shared/types/FCWithChildren";
import { TButtonSize } from "./types";

import { Container } from "./styles";

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  backgroundColor?: ThemeColors;
  textColor?: ThemeColors;
  size?: TButtonSize;
  disabledHint?: ReactNode;
  borderColor?: ThemeColors;
  applyDarkenInBackground?: boolean;
}

export const Button: FCWithChildren<IButtonProps> = ({
  isLoading,
  disabled,
  children,
  backgroundColor = "primary",
  textColor = "onPrimary",
  size = "md",
  applyDarkenInBackground,
  borderColor, 
  m,
  mt,
  mb,
  ml,
  mr,
  mv,
  mh,
  disabledHint,
  type = "button",
  ...props
}) => {
  return (
    <div>
      <Container
        {...props}
        disabled={isLoading || disabled}
        backgroundColor={backgroundColor}
        applyDarkenInBackground={applyDarkenInBackground}
        textColor={textColor}
        borderColor={borderColor}
        m={m}
        mt={mt}
        mb={mb}
        mr={mr}
        ml={ml}
        mv={mv}
        mh={mh}
        size={size}
        id="button"
        type={type}
      >
        {children}
      </Container>
    </div>
  );
};
