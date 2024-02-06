import { FC } from "react";
import { Category } from "./Category";
import { IGameplay } from "./CardGameplay";

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
        title: "Campeonato Paulista",
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
        title: "Campeonato Paulista",
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
    name: "Basquete",
    gameplays: [
      {
        title: "Campeonato Paulista",
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
    name: "Poker",
    gameplays: [
      {
        title: "Campeonato Paulista",
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
] as ICategory[];

export const Categories: FC = () => {
  return (
    <div>
      {data.map((category, index) => (
        <Category key={`category-${index}`} data={category} />
      ))}
    </div>
  );
};
