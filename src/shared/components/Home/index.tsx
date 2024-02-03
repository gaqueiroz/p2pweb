import { FC } from "react";
import { Container, Content } from "./styles";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Welcome } from "./Welcome";
import { SearchInput } from "../SearchInput";
import { Categories } from "./Categories";


export const Home: FC = () => {
  return (
    <Container>
      <Navbar />

      <SearchInput />


      <Content>
        <Sidebar />

        <div className="bets-content">
          <Welcome />
          
          <Categories />
        </div>
      </Content>
    </Container>
  )
}
