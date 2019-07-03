import React from "react"
import { Button, Icon, Grid, Header} from "semantic-ui-react"
import axios from "axios"
import { Link, } from "react-router-dom";
import Character from "./Character"
import {Beauton} from "../Styles/bitsNBobs"



class Characters extends React.Component {

  state = { 
    characters: [],
    user: "",
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
    axios.get("/api/characters")
      .then( res => {
        this.setState({ characters: res.data[0], user: res.data[1] });
      })
      .catch( err => {
        console.log(err);
      })
  }

  rendercharacters = () => {
    return this.state.characters.map( c => (
      <Character key={c.id} {...c}
       username={this.state.user.name}
       handleedit={this.handleEdit}
       handledelete={this.handleDelete}/>
    )
    )
  }

  render() {
    return(
      <>

          <Header textAlign="center" as="h1" style={{ color: "white"}}>{this.state.user.name}'s Characters </Header>
          <Grid stackable columns={4} centered>
            <Grid.Row style={{ marginTop: "30px"}}>
                  <Beauton color="green" shadow="lime" text="white" hover="darkgreen" href={"/characters/new"} style={{ marginBottom: "30px"}}>
                    <Icon name="plus"/> New Character
                  </Beauton> 

            </Grid.Row>
              {this.rendercharacters()}
          </Grid>

      </>

    )
  }

}

export default Characters