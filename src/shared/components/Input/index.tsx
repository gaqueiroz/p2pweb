import { FC, MutableRefObject } from "react";
import { Container } from "./styles";

// import { Container } from './styles';

interface IInputProps {
  label?: string;
  placeholder?: string;
  autoFocus?: boolean;
  ref?: any;
}

export const Input: FC<IInputProps> = ({
  label,
  ref,
  autoFocus = false,
  placeholder = '',
}) => {
  return (
    <Container>
      <input {...(ref && { ref })} placeholder={placeholder} autoFocus={autoFocus} />
    </Container>
  )
}
