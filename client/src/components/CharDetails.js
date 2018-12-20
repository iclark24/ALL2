import React from "react"
import {Segment, Header,  Icon, Grid, Button, Image, Card, Item} from "semantic-ui-react"
import { Link, } from "react-router-dom";
import axios from "axios"
import Cclass from "./Cclass"

class CharDetails extends React.Component {

  state = {
    character: {},
    cc_lasses: [],
    editing: false,
    }
    
  componentDidMount() {
    axios.get(`/api/characters/${this.props.match.params.id}`)
    .then( res => {
      this.setState({ character: res.data[0], cc_lasses: res.data[1], });
    })
    .catch( err => {
      console.log(err);
    })
  }
  
  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  rendercclasses = () => {
    return this.state.cc_lasses.map( c => (
      <Cclass key={c.id} {...c}/>
    )
    )
  }
    
  render() {
    const {id, name, race, image, level, downtime, renown, gold, } = this.state.character
    return (
      <div>
      <Segment>
      <Item.Group>
        <Item>
          <Item.Image floated="left" size="small" bordered src={image} />
          <Item.Content verticalAlign="middle">
            <Item.Header>{name}</Item.Header>
            <Item.Meta>{race}</Item.Meta>
            <Item.Description>
            <p>Level: {level}</p>
            <p>Downtime: {downtime}</p>
            <p>Renown: {renown}</p>
            </Item.Description>
            <Item.Extra>
              <Icon name='balance scale' />
              Gold: {gold}
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      </Segment>
      <Segment>
        <Grid columns={5} centered>
          {this.rendercclasses()}
        </Grid>
      </Segment>
      </div>
    )
  }

}

export default CharDetails