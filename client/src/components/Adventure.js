import React from "react"
import {Grid, Card, CardHeader, CardContent, CardMeta, Confirm, Button, Icon, CardDescription} from "semantic-ui-react"
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
      <>
        <Card>
          <CardContent>
          <CardHeader>
            {a_name}
          </CardHeader>
          {
            user?
          
            owner === user.id ?
            <CardDescription>
              <Button size="mini" icon color="red" onClick={this.open}>
                <Icon name="trash"/>
              </Button>
              <Confirm open={this.state.open} onCancel={this.close} onConfirm={() => adventuredelete(id)}/>
              {description}
            </CardDescription>
          :
            null
            :
            null
          }

          </CardContent>
          <CardMeta>
            {acp} Exp. | Tier {tier} | {tcpvalue} Tcp | {spent} Gold Earned
          </CardMeta>
          </Card>
      </>
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