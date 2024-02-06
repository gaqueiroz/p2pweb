import { FC } from "react";

import { Container } from "./style";
import { CardGameplay } from "../CardGameplay";
import { ICategory } from "..";

interface ICategoryProps {
  data: ICategory;
}

export const Category: FC<ICategoryProps> = ({
  data
}) => {
  return (
    <Container>
      <h1>{data.name}</h1>

      <div className="gameplays">
        {data.gameplays.map((gameplay, index) => (
          <CardGameplay key={`gameplay-${index}`} data={gameplay} />
        ))}
      </div>
    </Container>
  )
}
