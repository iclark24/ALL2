import React from "react"
import {Segment, Icon, Button, Item, Header, Grid} from "semantic-ui-react"
import axios from "axios"
import Cclass from "./Cclass"
import Adventure from "./Adventure"
import { AuthConsumer, } from "../providers/AuthProvider";
import {Beauton} from "../Styles/bitsNBobs"




class CharDetails extends React.Component {

  state = {
    character: {},
    cc_lasses: [],
    editing: false,
    adventures: [],
    }
    
  componentDidMount() {
    axios.get(`/api/characters/${this.props.match.params.id}`)
    .then( res => {
      this.setState({ character: res.data[0], cc_lasses: res.data[1], adventures: res.data[2], });
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

  renderadventures = () => {
    console.log(this.state.adventures)
    return this.state.adventures.map( c => (
      <Adventure key={c.id} {...c} levelmeth={this.state.character.levelmeth} owner={this.state.character.user_id} adventuredelete={this.adventureDelete}/>
    )
    )
  }

  adventureDelete = (id) => {
    // /api/characters/:character_id/adventures/:id
    axios.delete(`/api/characters/${this.state.character.id}/adventures/${id}`)
      .then( res => {
        const {adventures,} = this.state;
        this.setState({ adventures: adventures.filter(m => m.id !== id )})
        this.props.history.push("/characters")
      })
  }
    
  render() {
    const {id, cname, race, image, level, downtime, renown, gold, user_id, xp, levelmeth } = this.state.character
    const { auth: { user }, } = this.props;

    return (
      <>
      <Segment compact style={{ margin: "0 auto" }} textAlign="center">
        <Header>Character Details</Header>
        <Item.Group>
          <Item>
            <Item.Image floated="left" size="small" bordered src={image} />
            <Item.Content verticalAlign="middle">
              <Item.Header>{cname}</Item.Header>
              <Item.Meta>{race}</Item.Meta>
              <Item.Description>
              <p>Level: {level}</p>
              { levelmeth === "EXP" ?
                <p>EXP: {xp}</p>
              :
                <p>ACP: {xp}</p>
              }
              <p>Downtime: {downtime} days</p>
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
      {/* <Segment>
        <Grid columns={5} textAlign="center" centered>
          {this.rendercclasses()}
        </Grid>
      </Segment> */}
      <Segment basic textAlign="center">
        {
          user ?

            user.id === user_id ?
              // <Button color="green" href={`/characters/${id}/adventures/new`}>
              //   <Icon name="plus"/>New Adventure
              // </Button>
                  <Beauton color="green" shadow="lime" text="white" hover="darkgreen" href={`/characters/${id}/adventures/new`}>
                    <Icon name="plus"/> New Adventure
                  </Beauton> 
            :
            null
          :
          null
        }
        {/* <Card.Group stackable itemsPerRow={2} style={{ marginTop: "20px"}}>
          {this.renderadventures()}
        </Card.Group> */}
        {this.state.adventures.length > 0 ?
          <Segment textAlign="center" style={{overflowY: "scroll", maxHeight: "45vh",}}>
            <Grid centered stackable verticalAlign="top" columns={2} >
              {this.renderadventures()}
            </Grid>
          </Segment>
        :
          null
        }
      </Segment>
      </>
    )
  }

}

const ConnectedDetails = (props) => (
  <AuthConsumer>
    { auth => 
      <CharDetails { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedDetails