import React from "react"
import {Segment, Header,  Icon, Grid, Button, Image, Card} from "semantic-ui-react"
import { Link, } from "react-router-dom";
import CharacterForm from "./CharacterForm";


class Cclass extends React.Component {

  state = {
    editing: false,
    }

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  render() {
    const {c_name, level } = this.props
    return (
      <Grid.Column>
      {c_name} {level}
      </Grid.Column>
    )
  }

}

export default Cclass