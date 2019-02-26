import React from 'react';
import { Header, Container, P } from "../Styles/home";
import {World} from '../Styles/backgrounds'


const Home = () => (
  <World>
    <Container>
      <Header>Adventure Awaits...</Header>
      <P>
        Welcome to the (or at least my) Dungeons & Dragons 5E Character Logsheet Tool. Still a work in progress, this tool can be used to keep track of your adventures, gold earned and spent, magic items obtained, etc. etc...
      </P>
    </Container>
  </World>
)

export default Home;
