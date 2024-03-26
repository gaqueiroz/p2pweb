import { FC, useEffect, useState } from "react";
import { Container } from "./styles";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../Button";

interface INavbarProps {
  enabledFixedStyle: boolean;
}

export const Navbar: FC<INavbarProps> = ({
  enabledFixedStyle
}) => {
  return (
    <Container enabledFixedStyle={enabledFixedStyle}>
      <div className="content">
        <div className="logo-content">
          <Image width={90} height={40} src="/images/logo.png"  alt="logo"/>
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
            <Link href={'/auth/signin'}>
              <Button size="md" borderColor="gray400" backgroundColor="gray500">
                Entrar
              </Button>
            </Link>
          </div>

          <div>
            <Link href={'/auth/signup'}>
              <Button size="md">
                Cadastre-se
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};
