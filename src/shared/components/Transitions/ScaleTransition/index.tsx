import { ScaleFade } from "@chakra-ui/transition";
import { FC } from "react";

export const ScaleTransition: FC<{
  children: React.ReactNode
}> = ({
  children
}) => {
  return (
    <ScaleFade initialScale={0.9} in={true} delay={0.2}>
      {children}
    </ScaleFade>
  )
}
