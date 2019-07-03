import React from "react";
import axios from "axios";
import { Button, Form, Icon, Card, Image, Segment, Header, } from "semantic-ui-react"
import {Beauton} from "../Styles/bitsNBobs"


class CharacterForm extends React.Component {
  state = {
    cname: "", level: 1, xp: 0, race: "", downtime: 0, renown: 0, gold: "", image: "", levelmeth: "EXP",
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
    this.manageExpChange(this.state.xp)
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

  manageExpChange = (xp) =>{
    const {levelmeth} = this.state
    if(levelmeth === "EXP") {
      switch(true){
          case xp <= 299:
            this.setState({level: 1})
            break
          case xp <= 899:
            this.setState({level: 2})
            break
          case xp <= 2699:
            this.setState({level: 3})
            break
          case xp <= 6499:
            this.setState({level: 4})
            break
          case xp <= 13999:
            this.setState({level: 5})
            break
          case xp <= 22999:
            this.setState({level: 6})
            break
          case xp <= 33999:
            this.setState({level: 7})
            break
          case xp <= 47999:
            this.setState({level: 8})
            break
          case xp <= 63999:
            this.setState({level: 9})
            break
          case xp <= 84999:
            this.setState({level: 10})
            break
          case xp <= 99999:
            this.setState({level: 11})
            break
          case xp <= 11999:
            this.setState({level: 12})
            break
          case xp <= 139999:
            this.setState({level: 13})
            break
          case xp <= 164999:
            this.setState({level: 14})
            break
          case xp <= 194999:
            this.setState({level: 15})
            break
          case xp <= 224999:
            this.setState({level: 16})
            break
          case xp <= 264999:
            this.setState({level: 17})
            break
          case xp <= 304999:
            this.setState({level: 18})
            break
          case xp <= 354999:
            this.setState({level: 19})
            break
          case xp >= 355000:
            this.setState({level: 20})
            break
          default:
            this.setState({level: 1})
          break

      }
    }
    else {
      switch(true){
        case xp <= 3:
          this.setState({level: 1})
          break
        case xp <= 7:
          this.setState({level: 2})
          break
        case xp <= 11:
          this.setState({level: 3})
          break
        case xp <= 15:
          this.setState({level: 4})
          break
        case xp <= 23:
          this.setState({level: 5})
          break
        case xp <= 31:
          this.setState({level: 6})
          break
        case xp <= 39:
          this.setState({level: 7})
          break
        case xp <= 47:
          this.setState({level: 8})
          break
        case xp <= 55:
          this.setState({level: 9})
          break
        case xp <= 63:
          this.setState({level: 10})
          break
        case xp <= 71:
          this.setState({level: 11})
          break
        case xp <= 79:
          this.setState({level: 12})
          break
        case xp <= 87:
          this.setState({level: 13})
          break
        case xp <= 95:
          this.setState({level: 14})
          break
        case xp <= 103:
          this.setState({level: 15})
          break
        case xp <= 111:
          this.setState({level: 16})
          break
        case xp <= 119:
          this.setState({level: 17})
          break
        case xp <= 127:
          this.setState({level: 18})
          break
        case xp <= 135:
          this.setState({level: 19})
          break
        case xp >= 136:
          this.setState({level: 20})
          break
        default:
          this.setState({level: 1})
        break
      }
    }
  }

  render() {
    const { cname, level, xp, race, downtime, renown, gold, image, levelmeth } = this.state;
    return (
      <Segment basic textAlign="center" >
        <Beauton color="green" shadow="lime" text="white" hover="darkgreen" onClick={() => this.props.history.push("/characters")} style={{ marginBottom: "30px" }}>
          <Icon name="times" />Close Form
        </Beauton> 

        {this.props.id ?
          <Header textAlign="center" as="h1" style={{ color: "white" }}>Edit Character</Header>
          :
          <Header textAlign="center" as="h1" style={{ color: "white" }}>New Character</Header>
        }
        <br />

        <Card centered>
          <Image bordered src={image} />
          <Segment>
            <Form id="characterform" onSubmit={this.handleSubmit}>
              <Form.Field>
                <Form.Input
                  label="Name"
                  name="cname"
                  placeholder="Name"
                  value={cname}
                  onChange={this.handleChange}
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label="Race"
                  name="race"
                  placeholder="Race"
                  value={race}
                  onChange={this.handleChange}
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label="Gold"
                  name="gold"
                  type="number"
                  placeholder="0"
                  min={0}
                  value={gold}
                  onChange={this.handleChange}
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label="Img URL"
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
                  name='levelmeth'
                  checked={levelmeth === 'EXP'}
                  onChange={this.handleChangetwo}
                  required
                />
                <Form.Radio
                  label='ACP'
                  value='ACP'
                  name='levelmeth'
                  checked={levelmeth === 'ACP'}
                  onChange={this.handleChangetwo}
                  required
                />
              </Form.Group>
                <Form.Field>

                {levelmeth === "ACP" ?
                  <Form.Input
                  label="ACP"
                  name="xp"
                  type="number"
                  placeholder="ACP"
                  value={xp}
                  min={0}
                  onChange={this.handleChange}
                  required
                  />
                  :
                  <Form.Input
                  label="EXP"
                  name="xp"
                  type="number"
                  placeholder="EXP"
                  value={xp}
                  min={0}
                  onChange={this.handleChange}
                  required
                  />
                }
                </Form.Field>

              <div>
                <p>Level: {level}</p>

                <p>Downtime: {downtime}</p>
                <p>Renown: {renown}</p>
              </div>

              <Beauton as="button" color="green" shadow="lime" text="white" hover="darkgreen" style={{ margin: "30px" }}>
                Submit
              </Beauton> 
              {/* <Button color="green">Submit</Button> */}
            </Form>
          </Segment>
        </Card>
      </Segment>
    )
  }
}

export default CharacterForm;
