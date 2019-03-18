import React from "react"
import { AuthConsumer, } from "../providers/AuthProvider";
import {Segment, Confirm,  Icon, Grid, Button, Image, Card} from "semantic-ui-react"



class Character extends React.Component {

  state = {
    editing: false,
    open: false,
    }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  renderbuttons = () => {
    const { auth: { user }, } = this.props;

    if(user.id === this.props.user_id){
      return(
        <p>hi</p>
        )
      }
    else
      return(null)
  }

  render() {
    const {id, cname, race, image, level, downtime, renown, gold, handledelete, username, user_id, levelmeth } = this.props
    const { auth: { user }, } = this.props;

    return (
      <Grid.Column width={4}>
        <Card link centered>
          <Image href={`/characters/${id}`} src={image} />
          <Card.Content href={`/characters/${id}`}>
            <Card.Header>{cname}</Card.Header>
            <Card.Meta>{race}</Card.Meta>
            <Card.Description>
            <p>Level: {level}</p>
            <p>Leveling Method: {levelmeth}</p>
            <p>Downtime: {downtime} days</p>
            <p>Renown: {renown}</p>
            <p>Player: {username}</p>
            </Card.Description>
          </Card.Content>
          <Card.Content href={`/characters/${id}`} extra>
            <Icon name='balance scale' />
            Gold: {gold}
          </Card.Content>

          <Segment basic>
          {user ?

            user.id === user_id ?
            <>
            <p style={{ color: "green"}}>Your Character</p>
              <Button icon color="red" onClick={this.open}>
                <Icon name="trash"/>
              </Button>
              <Confirm open={this.state.open} onCancel={this.close} onConfirm={() => handledelete(id)}/>
              {/* <Button color="green" href={`/characters/${id}/cc_lasses/new`}>
                <Icon name="shield alternate"/>Add Class
              </Button> */}
            </>
            :
            null
          
          :
          null
        }
          </Segment>
        </Card>

      </Grid.Column>
    )
  }

}

const ConnectedCharacter = (props) => (
  <AuthConsumer>
    { auth => 
      <Character { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedCharacter