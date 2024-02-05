import { FC } from "react";
import { Container } from "./styles";
import {
  RiFootballLine,
  RiHomeSmileLine,
  RiLiveLine,
  RiStarFill,
} from "react-icons/ri";
import Link from "next/link";

interface ISidebarProps {
  enabledFixedStyled: boolean;
}

export const Sidebar: FC<ISidebarProps> = ({
  enabledFixedStyled
}) => {
  return (
    <Container enabledNavbarFixedStyle={enabledFixedStyled}>
      <ul>
        <li>
          <Link href={"/"}>
            <RiHomeSmileLine />
            Página inicial
          </Link>
        </li>

        <li>
          <Link href={"/"}>
            <RiLiveLine />
            Ao vivo
          </Link>
        </li>

        <li>
          <Link href={"/"}>
            <RiFootballLine />
            Esportes
          </Link>
        </li>

        <li>
          <Link href={"/"}>
            <RiStarFill />
            Favoritos
          </Link>
        </li>
      </ul>
    </Container>
  );
};
