import React from "react"
import {Segment, Header,  Icon, Grid, Button, Image, Card, CardHeader, CardContent, CardMeta} from "semantic-ui-react"


class Adventure extends React.Component {

  state = {
    editing: false,
    }

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  render() {
    const {a_name, description, acp, tier, downtime, renown, tcpvalue } = this.props
    return (
      <Grid.Column>
        <Card fluid>
          <CardHeader>
            {a_name}
          </CardHeader>
          <CardContent>
            {description}
          </CardContent>
          <CardMeta>
            {acp} Acp | Tier {tier} | {tcpvalue} Tcp
          </CardMeta>
          </Card>
      </Grid.Column>
    )
  }

}

export default Adventure