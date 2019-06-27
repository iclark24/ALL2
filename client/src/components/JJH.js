import React from "react"
import { Card, CardHeader, CardContent, CardMeta, Confirm, Button, Icon, CardDescription, Grid} from "semantic-ui-react"
import { AuthConsumer, } from "../providers/AuthProvider";


class Adventure extends React.Component {

  state = {
    editing: false,
    open: false,
    }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  render() {
    const { auth: { user }, } = this.props;

    return (
      <Grid>
        
      </Grid>
    )
  }

}

const ConnectedJJH = (props) => (
  <AuthConsumer>
    { auth => 
      <Adventure { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedJJH