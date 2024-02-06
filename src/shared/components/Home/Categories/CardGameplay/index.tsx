// @ts-nocheck

import { FC } from "react";
import Image from "next/image";

import { formatDate } from '../../../../utils/formatDate';
import { Container, BetButton } from "./styles";

export interface IGameplay {
  title: string;
  date: Date;
  isLive?: boolean;
  from: {
    name: string;
    logo: string;
  };
  to: {
    name: string;
    logo: string;
  };
  bets: {
    name: string;
    value: number;
  }[];
}
interface ICardGameplayProps {
  data: IGameplay;
}

export const CardGameplay: FC<ICardGameplayProps> = ({ data }) => {
  return (
    <Container>
      <div className="teams">
        {data.from && <Image width={60} height={60} src={data.from.logo} alt="from" />}

        <span>VS</span>

        {data.to && <Image width={60} height={60} src={data.to.logo} alt="to" />}
      </div>

      <div className="info">
        <span>{data.title}</span>
      </div>

      <div className="date">
        <span>
          {data.isLive ? 'agora' : formatDate(data.date)}
        </span>
      </div>

      <div className="buttons-container">
        {data.bets?.map((bet, index) => (
          <BetButton key={`bet-button-${index}`}>
            <span>{bet.value.toFixed(2)}</span>

            <br />

            {bet.name}
          </BetButton>
        ))}
      </div>
    </Container>
  );
};
