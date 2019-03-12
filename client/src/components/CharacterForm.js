import React, {Fragment} from "react";
import axios from "axios";
import {Button, Form, Icon, Segment} from "semantic-ui-react"
import {World} from '../Styles/backgrounds'
import {Container, Header} from "../Styles/home"

class CharacterForm extends React.Component {
  state = { 
    cname: "", level: 1, xp: 0, race: "", downtime: 0, renown: 0, gold: "", image: "",
    };

  componentDidMount() {
    const { id, cname, level, xp, race, downtime, renown, gold, image } = this.props;
    if (id){
      this.setState({  cname: cname, level: level, xp: xp, race: race, downtime: downtime, renown: renown, gold: gold, image: image, });
    }
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState( {[name]: value} );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const character = this.state;
      axios.post("/api/characters", character )
        .then( res => {
          this.props.history.push("/characters")
        })
    }
  

  render() {
    const {cname, level, xp, race, downtime, renown, gold, image,} = this.state;
    return (
      <World faded>
        <Container>
          <Button onClick={() => this.props.history.push("/characters")} style={{ marginBottom: "30px"}} color="green">
            <Icon cname="times"/>Close Form
          </Button>

          {this.props.id?
                <Header>Edit Character</Header>
                :
                <Header>New Character</Header>
              }
              <br/>
        
          <Segment>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Name</label>
                <input
                name="cname"
                placeholder="Name"
                value={cname}
                onChange={this.handleChange}
                required
                />
              </Form.Field>
              <Form.Field>
                <label>Race</label>
                <input
                name="race"
                placeholder="Race"
                value={race}
                onChange={this.handleChange}
                required
                />
              </Form.Field>
              <Form.Field>
                <label>Gold</label>
                <input
                name="gold"
                type="number"
                placeholder="0"
                value={gold}
                onChange={this.handleChange}
                required
                />
              </Form.Field>
              <Form.Field>
                <label>Img URL</label>
                <input
                name="image"
                placeholder="URL"
                value={image}
                onChange={this.handleChange}
                />
              </Form.Field>

            <div>
              <p>Level: {level}</p>
              <p>EXP: {xp}</p>
              <p>Downtime: {downtime}</p>
              <p>Renown: {renown}</p>
            </div>

              <Button color="green">Submit</Button>
            </Form>
          </Segment>
        </Container>
      </World>
    )
  }
}

export default CharacterForm;
