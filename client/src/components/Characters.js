import React from "react"
import { Button, Icon, Grid} from "semantic-ui-react"
import axios from "axios"
import { Link, } from "react-router-dom";
import Character from "./Character"

class Characters extends React.Component {

  state = { 
    characters: [],  
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
        this.setState({ characters: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  }

  rendercharacters = () => {
    return this.state.characters.map( c => (
      <Character key={c.id} {...c} handleedit={this.handleEdit} handledelete={this.handleDelete}/>
    )
    )
  }

  render() {
    return(
      <div>
        <Link to="/characters/new">
          <Button style={{ marginBottom: "30px"}} color="green">
            <Icon name="plus"/>New Character
          </Button>
        </Link>
        <Grid columns={4} centered>
            {this.rendercharacters()}
        </Grid>
      </div>


    )
  }

}

export default Characters