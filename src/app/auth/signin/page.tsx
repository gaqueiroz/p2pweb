"use client";

import Image from "next/image";
import { ScaleTransition } from "@/shared/components/Transitions/ScaleTransition";
import { AuthContainer } from "../styles";
import { FormGroup } from "@/shared/components/FormGroup";
import { Input } from "@/shared/components/Input";
import { Button } from "@/shared/components/Button";

export default function Signin() {
  return (
    <AuthContainer>
      <div className="auth-content">
        <ScaleTransition>
          <form>
            <Image width={90} height={55} src="/images/logo.png"  alt="logo"/>

            <h1>Entre na sua conta</h1>

      
            <FormGroup>
              <Input autoFocus placeholder="Telefone" />
            </FormGroup>

            <Input placeholder="Senha" />

            <div style={{ marginTop: 32 }} /> 

            <Button
              size={"lg"}
              textColor={"onSurface"}
              backgroundColor={"onPrimary"}
            >
              Entrar
            </Button>
          </form>
        </ScaleTransition>
      </div>
    </AuthContainer>
  );
}
