import React from "react";
import axios from "axios";
import { Button, Form, Icon, Card, Image, Segment, Header, } from "semantic-ui-react"


class CharacterForm extends React.Component {
  state = {
    cname: "", level: 1, xp: 0, race: "", downtime: 0, renown: 0, gold: "", image: "", leveltype: "",
  };

  componentDidMount() {
    const { id, cname, level, xp, race, downtime, renown, gold, image } = this.props;
    if (id) {
      this.setState({ cname: cname, level: level, xp: xp, race: race, downtime: downtime, renown: renown, gold: gold, image: image, });
    }
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState( {[name]: value} );
  }

  handleChangetwo = (e, data) => {
    this.setState({ [data.name]: data.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const character = this.state;
    axios.post("/api/characters", character)
      .then(res => {
        this.props.history.push("/characters")
      })
  }


  render() {
    const { cname, level, xp, race, downtime, renown, gold, image, leveltype } = this.state;
    return (
      <Segment basic textAlign="center" >
        <Button onClick={() => this.props.history.push("/characters")} style={{ marginBottom: "30px" }} color="green">
          <Icon name="times" />Close Form
          </Button>

        {this.props.id ?
          <Header textAlign="center" as="h1" style={{ color: "white" }}>Edit Character</Header>
          :
          <Header textAlign="center" as="h1" style={{ color: "white" }}>New Character</Header>
        }
        <br />

        <Card centered>
          <Image bordered src={image} />
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
              <Header as="h5">Level-Up Method</Header>
              <Form.Group inline widths={"equal"}>
                <Form.Radio
                  label='EXP'
                  value='EXP'
                  name='leveltype'
                  checked={leveltype === 'EXP'}
                  onChange={this.handleChangetwo}
                  required
                />
                <Form.Radio
                  label='ACP'
                  value='ACP'
                  name='leveltype'
                  checked={leveltype === 'ACP'}
                  onChange={this.handleChangetwo}
                  required
                />
              </Form.Group>
              <div>
                <p>Level: {level}</p>
                <p>EXP: {xp}</p>
                <p>Downtime: {downtime}</p>
                <p>Renown: {renown}</p>
              </div>

              <Button color="green">Submit</Button>
            </Form>
          </Segment>
        </Card>
      </Segment>
    )
  }
}

export default CharacterForm;
