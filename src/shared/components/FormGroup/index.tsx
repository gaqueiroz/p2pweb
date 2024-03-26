import { FC, Children } from "react";

import { Container } from "./styles";

export const FormGroup: FC<{
  children: React.ReactNode
}> = ({
  children
}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
