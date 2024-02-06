import { FC } from "react";
import { Category } from "./Category";
import { IGameplay } from "./CardGameplay";
import { Container } from "./styles";

// import { Container } from './styles';

export interface ICategory {
  name: string;
  gameplays: IGameplay[];
}

const data = [
  {
    name: "Ao vivo",
    gameplays: [
      {
        title: "Campeonato paulista",
        isLive: true,
        date: new Date(),
        from: {
          name: "Palmeiras",
          logo: "https://uploaddeimagens.com.br/images/004/730/957/full/palmeiras.png?1706995931",
        },
        to: {
          name: "Corinthians",
          logo: "https://uploaddeimagens.com.br/images/004/730/959/full/corinthians.png?1706996034",
        },
        bets: [
          {
            name: "Pal",
            value: 1.3,
          },
          {
            name: "Empate",
            value: 1.9,
          },
          {
            name: "Cor",
            value: 2,
          },
        ],
      },
      {
        title: "Champions league",
        isLive: true,
        from: {
          name: "Machester City",
          logo: "https://uploaddeimagens.com.br/images/004/732/805/full/city.png?1707185168",
        },
        to: {
          name: "PSG",
          logo: "https://uploaddeimagens.com.br/images/004/732/806/full/psg.png?1707185270",
        },
        date: new Date(),
        bets: [
          {
            name: "City",
            value: 1.4,
          },
          {
            name: "Empate",
            value: 2,
          },
          {
            name: "Psg",
            value: 2.4,
          },
        ],
      },
      {
        title: "Campeonato carioca",
        isLive: true,
        from: {
          name: "Flamengo",
          logo: "https://uploaddeimagens.com.br/images/004/732/813/full/flamengo.png?1707185663",
        },
        to: {
          name: "Fluminense",
          logo: "https://uploaddeimagens.com.br/images/004/732/814/full/fluminense_%285%29.png?1707185904",
        },
        date: new Date(),
        bets: [
          {
            name: "Fla",
            value: 1.3,
          },
          {
            name: "Empate",
            value: 2,
          },
          {
            name: "Flu",
            value: 1.7,
          },
        ],
      },
    ],
  },
  {
    name: "Futebol",
    gameplays: [
      {
        title: "Pré-Olímpico",
        date: new Date(),
        from: {
          name: "Brasil",
          logo: "https://uploaddeimagens.com.br/images/004/732/821/full/brasil.png?1707186771",
        },
        to: {
          name: "Paraguai",
          logo: "https://uploaddeimagens.com.br/images/004/732/825/full/paraguai.png?1707186883",
        },
        bets: [
          {
            name: "Bra",
            value: 1.3,
          },
          {
            name: "Empate",
            value: 1.9,
          },
          {
            name: "Par",
            value: 2,
          },
        ],
      },
      {
        title: "Campeonato paulista",
        from: {
          name: "Botafogo",
          logo: "https://uploaddeimagens.com.br/images/004/732/831/full/botafogo.png?1707187141",
        },
        to: {
          name: "Ponte Preta",
          logo: "https://uploaddeimagens.com.br/images/004/732/835/full/botafogo.png?1707187266",
        },
        date: new Date(),
        bets: [
          {
            name: "Bot",
            value: 1.4,
          },
          {
            name: "Empate",
            value: 2,
          },
          {
            name: "Pon",
            value: 2.4,
          },
        ],
      },
      {
        title: "Campeonato paulista",
        from: {
          name: "Novorizontino",
          logo: "https://uploaddeimagens.com.br/images/004/732/839/full/novohorizontino.png?1707187371",
        },
        to: {
          name: "Bragantino",
          logo: "https://uploaddeimagens.com.br/images/004/732/841/full/bragantino.png?1707187428",
        },
        date: new Date(),
        bets: [
          {
            name: "Nov",
            value: 1.3,
          },
          {
            name: "Empate",
            value: 2,
          },
          {
            name: "Bra",
            value: 1.7,
          },
        ],
      },
    ],
  },
  {
    name: "Basquete",
    gameplays: [
      {
        title: "Nba",
        date: new Date(),
        from: {
          name: "Indiana Pacers",
          logo: "https://uploaddeimagens.com.br/images/004/732/843/full/andumiE_wrpDpXvUgqCGYQ_96x96.png?1707187566",
        },
        to: {
          name: "Houston Rockets",
          logo: "https://uploaddeimagens.com.br/images/004/732/844/full/zhO6MIB1UzZmtXLHkJQBmg_96x96.png?1707187624",
        },
        bets: [
          {
            name: "Pacers",
            value: 1.3,
          },
          {
            name: "Houston",
            value: 2,
          },
        ],
      },
      {
        title: "Nba",
        from: {
          name: "New York Knicks",
          logo: "https://uploaddeimagens.com.br/images/004/732/848/full/-rf7eY39l_0V7J4ekakuKA_96x96.png?1707187781",
        },
        to: {
          name: "Memphis Grizzlies",
          logo: "https://uploaddeimagens.com.br/images/004/732/849/full/3ho45P8yNw-WmQ2m4A4TIA_96x96.png?1707187834",
        },
        date: new Date(),
        bets: [
          {
            name: "Knicks",
            value: 1.4,
          },
          {
            name: "Grizzlies",
            value: 2.4,
          },
        ],
      },
      {
        title: "Nba",
        from: {
          name: "Miami Heat",
          logo: "https://uploaddeimagens.com.br/images/004/732/850/full/0nQXN6OF7wnLY3hJz8lZJQ_96x96.png?1707187945",
        },
        to: {
          name: "Orlando Magic",
          logo: "https://uploaddeimagens.com.br/images/004/732/852/full/p69oiJ4LDsvCJUDQ3wR9PQ_96x96.png?1707187987",
        },
        date: new Date(),
        bets: [
          {
            name: "Miami Heat",
            value: 1.3,
          },
          {
            name: "Orlando Magic",
            value: 1.7,
          },
        ],
      },
    ],
  }
] as ICategory[];

export const Categories: FC = () => {
  return (
    <Container>
      {data.map((category, index) => (
        <Category key={`category-${index}`} data={category} />
      ))}
    </Container>
  );
};
