import { FC } from "react";
import Image from "next/image";

import { Container } from './styles';
import { Button } from "../../Button";

export const Welcome: FC = () => {
  return (
    <Container>
      <div style={{ flex: 1 }}>
        <h1>Bem vindo ao P2P</h1>
        <h2>Explore a adrenalina do jogo no nosso site, onde a sorte encontra a ousadia e cada palpite é uma chance de vitória extraordinária!</h2>

        <Button size="md">
          Cadastre-se
        </Button>
      </div>

      <div>
        <Image width={200} height={165} src="/images/welcome.png"  alt="welcome" />
      </div>
    </Container>
  )
}
