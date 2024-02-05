import { FC, useEffect, useState } from "react";
import { Container, Content } from "./styles";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Welcome } from "./Welcome";
import { SearchInput } from "../SearchInput";
import { Categories } from "./Categories";


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
      <Navbar enabledFixedStyle={scrollPosition > 0} />

      <SearchInput />


      <Content>
        <Sidebar enabledFixedStyled={scrollPosition > 62} />

        <div className="bets-content" {...(scrollPosition > 62 && {style: { marginLeft: 234.7 }})}>
          <Welcome />
          
          <Categories />
        </div>
      </Content>
    </Container>
  )
}
