import React from "react"
import {Segment, Header,  Icon, Grid, Button, Image, Card} from "semantic-ui-react"
import { Link, } from "react-router-dom";
import CharacterForm from "./CharacterForm";


class Character extends React.Component {

  state = {
    editing: false,
    }

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  render() {
    const {id, name, race, image, level, downtime, renown, gold, handleedit, handledelete, } = this.props
    return (
      <Grid.Column>

        <Card>
          <Image href={`/characters/${id}`} src={image} />
          <Card.Content href={`/characters/${id}`}>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{race}</Card.Meta>
            <Card.Description>
            <p>Level: {level}</p>
            <p>Downtime: {downtime}</p>
            <p>Renown: {renown}</p>
            
            </Card.Description>
          </Card.Content>
          <Card.Content href={`/characters/${id}`} extra>
            <Icon name='balance scale' />
            Gold: {gold}
          </Card.Content>
          <Segment basic>
            <Button icon color="red" onClick={() => handledelete(id)}>
              <Icon name="trash"/>
            </Button>
            <Button color="green" href={`/characters/${id}/cc_lasses/new`}>
              <Icon name="shield alternate"/>Add Class
            </Button>
          </Segment>
        </Card>

      </Grid.Column>
    )
  }

}

export default Character