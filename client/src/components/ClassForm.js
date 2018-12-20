import React from "react";
import axios from "axios";
import {Button, Form, Segment, Header} from "semantic-ui-react"

class ClassForm extends React.Component {
  state = { 
    c_name: "", level: 1, character_id: "",
    };

  componentDidMount() {
    const { id, c_name, level, } = this.props;
    const { character_id } = this.props.match.params
    if (id){
      this.setState({  c_name: c_name, level: level, character_id: character_id });
    }
  }

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState( {[name]: value} );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const cclass = this.state;
      axios.post(`/api/characters/${this.props.match.params.character_id}/cc_lasses`, cclass )
        .then( res => {
          this.props.history.push("/characters")
        })
    }
  

  render() {
    const {c_name, level,} = this.state;
    return (
      <Segment basic padded>
        {this.props.id?
              <Header>Edit Class</Header>
            :
        <Header>New Class</Header>
        }
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Class</label>
            <input
            name="c_name"
            placeholder="Class"
            value={c_name}
            onChange={this.handleChange}
            required
            />
          </Form.Field>
          <Form.Field>
            <label>Level</label>
            <input
            name="level"
            type="number"
            placeholder="0"
            value={level}
            onChange={this.handleChange}
            required
            />
          </Form.Field>
          <Button color="green">Submit</Button>
        </Form>
      </Segment>
    )
  }
}

export default ClassForm;
