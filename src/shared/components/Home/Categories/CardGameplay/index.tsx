// @ts-nocheck

import { FC } from "react";
import Image from 'next/image';
import { Container } from "./styles";
import { Button } from "@/shared/components/Button";

// import { Container } from './styles';

export const CardGameplay: FC = () => {
  return (
    <Container>
      <div className="teams">
        <Image width={60} height={60} src={"https://uploaddeimagens.com.br/images/004/730/957/full/palmeiras.png?1706995931"} />

X

        <Image width={60} height={60} src={"https://uploaddeimagens.com.br/images/004/730/959/full/corinthians.png?1706996034"} />
      </div>
   
      
      <div className="info">
        <span>
          Campeonato paulista
        </span>
      </div>

      <div className="date">
        <span>
          Dom 18:00
        </span>
      </div>

      <Button>
        Apostar
      </Button>
    </Container>
  )
}
