import { FC } from "react";
import { Container } from "./styles";
import { SearchInput } from "../../SearchInput";
import {
  RiFootballLine,
  RiHomeSmileLine,
  RiLiveLine,
  RiStarFill,
} from "react-icons/ri";
import { IoIosFootball } from "react-icons/io";
import Link from "next/link";

export const Sidebar: FC = () => {
  return (
    <Container>
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
