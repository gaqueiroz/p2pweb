import { FC } from "react";

import { Container } from "./style";
import { CardGameplay } from "../CardGameplay";

export const Category: FC = () => {
  return (
    <Container>
      <h1>Ao vivo</h1>

      <div className="gameplays">
        <CardGameplay />

        <CardGameplay />

        <CardGameplay />

        <CardGameplay />
      </div>
    </Container>
  )
}
