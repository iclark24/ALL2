import React from "react"
import {Grid,} from "semantic-ui-react"



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