import { FC, useEffect, useState } from "react";
import { Container, Content } from "./styles";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Welcome } from "./Welcome";
import { SearchInput } from "../SearchInput";
import { Categories } from "./Categories";
import { ScaleFade } from "@chakra-ui/transition";


export const Home: FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const height = window.scrollY || document.documentElement.scrollTop;

      console.log({ heightasdsa: height })
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <Container>
      <ScaleFade in={true}>
        <Navbar enabledFixedStyle={scrollPosition > 0} />
      </ScaleFade>

      <ScaleFade in={true} delay={0.2}>
        <SearchInput />
      </ScaleFade>


      <Content>
        <ScaleFade in={true} delay={0.3}>
          <Sidebar enabledFixedStyled={scrollPosition > 62} />
        </ScaleFade>

        <div className="bets-content" {...(scrollPosition > 62 && {style: { marginLeft: 266 }})}>
          <Welcome />
          
          <Categories />
        </div>
      </Content>
    </Container>
  )
}
