import { FC } from "react";
import { Container } from "./styles";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../Button";

// import { Container } from './styles';

export const Navbar: FC = () => {
  return (
    <Container>
      <div className="content">
        <div className="logo-content">
          <Image width={200} height={25} src="/images/logo.png"  alt="logo"/>
        </div>

        <div className="nav-items">
          <div className="nav-item">
            <Link href={"/"}>
              Esportes
            </Link>
          </div>
          <div className="nav-item">
            <Link href={"/"}>
              Ao vivo
            </Link>
          </div>
        </div>

        <div className="nav-options">
          {/* <div>
            <button>linguagem</button>
          </div> */}

          <div style={{ marginRight: 16 }}>
            <Button size="md" borderColor="gray400" backgroundColor="gray500">
              Entrar
            </Button>
          </div>

          <div>
            <Button size="md">
              Cadastre-se
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
