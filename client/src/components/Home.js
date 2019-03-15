import React, {Link} from 'react';
import { Header, P } from "../Styles/home";
import {World} from '../Styles/backgrounds'
import {Container, Grid, Icon} from "semantic-ui-react"
import Character from "./Character"
import axios from "axios"



class Home extends React.Component {
  
  state = {
    characters: [],
  }
  
  rendercharacters = () => {
    return this.state.characters.map( c => (
      <Character key={c.id} {...c}
      //  username={this.state.user.name}
       handleedit={this.handleEdit}
       handledelete={this.handleDelete}/>
    )
    )
  }

  handleDelete = (id) => {
    axios.delete(`/api/characters/${id}`)
      .then( res => {
        const {characters} = this.state;
        this.setState({ characters: characters.filter(m => m.id !== id )})
      })
  }

  handleEdit = () => {
    axios.get("/api/characters")
    .then( res => {
      this.setState({ characters: res.data, });
    })
    .catch( err => {
      console.log(err);
    })
}

  componentDidMount() {
    axios.get("/api/rindex")
      .then( res => {
        this.setState({ characters: [...res.data[0], ...res.data[1], ...res.data[2], ...res.data[3]] });
      })
      .catch( err => {
        console.log(err);
      })
  }

    render() {
      return(
        <World>
          <Container style={{ paddingTop: "50px"}}>
            <Header>Adventure Awaits...</Header>
            <P>
              Welcome to the (or at least my) Dungeons & Dragons 5E Character Logsheet Tool. Still a work in progress, this tool can be used to keep track of your adventures, gold earned and spent, magic items obtained, etc. etc...
            </P>
              <Grid stackable columns={4} centered>
                  {this.rendercharacters()}
              </Grid>
          </Container>
        </World>
      )
    }
}

export default Home;
