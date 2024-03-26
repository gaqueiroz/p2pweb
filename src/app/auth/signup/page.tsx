"use client"


import Image from "next/image";
import { ScaleTransition } from "@/shared/components/Transitions/ScaleTransition";
import { AuthContainer } from "../styles";
import { Input } from "@/shared/components/Input";
import { FormGroup } from "@/shared/components/FormGroup";
import { useEffect, useRef } from "react";
import { Button } from "@/shared/components/Button";

export default function Signup() {
  const nameInputRef = useRef();

  useEffect(()  => {
    document.body.classList.add('auth-background');

      return () => {
        document.body.classList.remove('auth-background');
      };
  });
  
  return (
    <AuthContainer>
      <div className="auth-content">
        <ScaleTransition>
          <form>
            <Image width={90} height={55} src="/images/logo.png"  alt="logo"/>

            <h1>Crie sua conta</h1>

            <FormGroup>
              <Input ref={nameInputRef} autoFocus placeholder="Nome" />
            </FormGroup>

            <FormGroup>
              <Input placeholder="Nome" />
            </FormGroup>

            <FormGroup>
              <Input placeholder="Telefone" />
            </FormGroup>

            <Input placeholder="Senha" />

            <div style={{ marginTop: 32 }} /> 

            <Button size={'lg'} textColor={'onSurface'} backgroundColor={'onPrimary'} >
              Criar conta
            </Button>
          </form>
        </ScaleTransition>
      </div>
    </AuthContainer>
  )
}
