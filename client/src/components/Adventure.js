import React from "react"
import { Card, CardHeader, CardContent, CardMeta, Confirm, Button, Icon, CardDescription, Grid} from "semantic-ui-react"
import { AuthConsumer, } from "../providers/AuthProvider";
import {Beauton} from "../Styles/bitsNBobs"


class Adventure extends React.Component {

  state = {
    editing: false,
    open: false,
    }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  render() {
    const {id, a_name, description, xp, tier, downtime, renown, tcpvalue, spent, adventuredelete, owner } = this.props
    const { auth: { user }, } = this.props;

    return (
      <Grid.Column width="8">
        <Card color="green" fluid>
          <CardContent>
          <CardHeader>
            {a_name}
            <Beauton icon color="red" shadow="orange" text="white" hover="darkred" onClick={this.open} float="right" size="small">
              {/* <Button icon color="red" onClick={this.open}> */}
                <Icon size="small" name="trash"/>
              </Beauton>
          </CardHeader>
          {
            user?
          
            owner === user.id ?
            <CardDescription>
              
              <Confirm 
              open={this.state.open}
              onCancel={this.close}
              onConfirm={() => adventuredelete(id)}
              content="Are you sure you want to delete this adventure? Doing so can change all details of your character."
              cancelButton='On second thought...'
              confirmButton="I can live with that"
              />
              {description}
            </CardDescription>
          :
            null
            :
            null
          }

          </CardContent>
          { this.props.levelmeth === "EXP" ?
            <CardMeta>
              {xp} Exp. | Tier {tier} | {tcpvalue} Tcp | {renown} Renown | {downtime} Downtime |{spent} Gold Earned
            </CardMeta>
          :
            <CardMeta>
              {xp} ACP | Tier {tier} | {tcpvalue} Tcp | {renown} Renown | {downtime} Downtime | {spent} Gold Earned
            </CardMeta>
          }
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