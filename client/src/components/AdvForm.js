import React from "react";
import axios from "axios";
import {Button, Form, Segment, Header, Container} from "semantic-ui-react"
import {World} from '../Styles/backgrounds'
import Textarea from 'react-textarea-autosize';


class AdvForm extends React.Component {
  state = { 
    a_name: "",
    description: "",
    acp: "",
    tier: "",
    downtime: "",
    renown: "",
    tcpvalue: "",
    spent: "",
    character_id: "",
    };

  componentDidMount() {
    const { id, a_name, description, acp, tier, downtime, renown, tcpvalue, spent, } = this.props;
    const { character_id } = this.props.match.params
    if (id){
      this.setState({  a_name: a_name, description: description, acp: acp, tier: tier, downtime: downtime, renown: renown, tcpvalue: tcpvalue, spent: spent, character_id: character_id, });
    }
  }

  handleChange = (e, data) => {
    this.setState({ [data.name]: data.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const adventure = this.state;
      axios.post(`/api/characters/${this.props.match.params.character_id}/adventures`, adventure )
        .then( res => {
          this.props.history.push("/characters")
        })
    }
  

  render() {
    const {a_name, description, acp, tier, downtime, renown, tcpvalue, spent, } = this.state;
    return (

      <World faded>
        <Container>
          <Segment padded>
            {this.props.id?
                  <Header>Edit Adventure</Header>
                  :
                  <Header>New Adventure</Header>
                }
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <Form.Input
                  label="Adventure"
                  autoFocus
                  name="a_name"
                  placeholder="Adventure Name"
                  value={a_name}
                  onChange={this.handleChange}
                  required
                  />
              </Form.Field>
              <Form.Field>
                <Form.TextArea
                  label="Description"
                  name="description"
                  style={{ minHeight: 100 }}
                  placeholder="Description"
                  value={description}
                  onChange={this.handleChange}
                  />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label="Experience Earned"
                  name="acp"
                  placeholder="0"
                  type="number"
                  value={acp}
                  onChange={this.handleChange}
                  required
                  />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label="Tier"
                  name="tier"
                  placeholder="1"
                  type="number"
                  min="1"
                  max="4"
                  value={tier}
                  onChange={this.handleChange}
                  required
                  />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label="Downtime Days"
                  name="downtime"
                  placeholder="0"
                  type="number"
                  value={downtime}
                  onChange={this.handleChange}
                  required
                  />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label="Renown"
                  name="renown"
                  placeholder="0"
                  type="number"
                  value={renown}
                  onChange={this.handleChange}
                  required
                  />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label="Treasure Check Points"
                  name="tcpvalue"
                  placeholder="0"
                  type="number"
                  value={tcpvalue}
                  onChange={this.handleChange}
                  required
                  />
                <Form.Field>
                  <Form.Input
                    label="Gold Earned"
                    name="spent"
                    placeholder="0"
                    type="number"
                    value={spent}
                    onChange={this.handleChange}
                    required
                    />
              </Form.Field>
              </Form.Field>
              <Button color="green">Submit</Button>
            </Form>
          </Segment>
        </Container>
      </World>
    )
  }
}

export default AdvForm;