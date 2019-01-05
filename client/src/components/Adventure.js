import React from "react"
import {Grid, Card, CardHeader, CardContent, CardMeta, Confirm, Button, Icon} from "semantic-ui-react"


class Adventure extends React.Component {

  state = {
    editing: false,
    open: false,
    }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  render() {
    const {id, a_name, description, acp, tier, downtime, renown, tcpvalue, spent, adventuredelete, } = this.props
    return (
      <Grid.Column>
        <Card fluid>
          <CardHeader>
            {a_name}
          </CardHeader>
          <CardContent>
          <Button size="mini" icon color="red" onClick={this.open}>
            <Icon name="trash"/>
          </Button>
          <Confirm open={this.state.open} onCancel={this.close} onConfirm={() => adventuredelete(id)}/>
            {description}
          </CardContent>
          <CardMeta>
            {acp} Acp | Tier {tier} | {tcpvalue} Tcp | {spent} Gold Spent
          </CardMeta>
          </Card>
      </Grid.Column>
    )
  }

}

export default Adventure