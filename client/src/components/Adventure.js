import React from "react"
import {Grid, Card, CardHeader, CardContent, CardMeta, Confirm, Button, Icon} from "semantic-ui-react"
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
    const {id, a_name, description, acp, tier, downtime, renown, tcpvalue, spent, adventuredelete, owner } = this.props
    const { auth: { user }, } = this.props;

    return (
      <Grid.Column>
        <Card fluid>
          <CardHeader>
            {a_name}
          </CardHeader>
          <CardContent>
          {
            user?
          
            owner === user.id ?
            <>
              <Button size="mini" icon color="red" onClick={this.open}>
                <Icon name="trash"/>
              </Button>
              <Confirm open={this.state.open} onCancel={this.close} onConfirm={() => adventuredelete(id)}/>
            </>
          :
            null
            :
            null
          }

            {description}
          </CardContent>
          <CardMeta>
            {acp} Acp | Tier {tier} | {tcpvalue} Tcp | {spent} Gold Earned
          </CardMeta>
          </Card>
      </Grid.Column>
    )
  }

}

const ConnectedAdventure = (props) => (
  <AuthConsumer>
    { auth => 
      <Adventure { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedAdventure