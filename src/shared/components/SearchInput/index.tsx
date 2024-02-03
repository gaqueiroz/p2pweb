import { FC, ForwardRefRenderFunction } from "react";

import { Container } from "./styles";

interface ISearchInputProps {
  label?: string;
}

export const SearchInput: FC<ISearchInputProps> = ({
  label,
}) => {
  return (
    <Container>
      <input type="text" placeholder="Pesquisar" />
    </Container>
  )
}
