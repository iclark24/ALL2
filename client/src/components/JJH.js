import React from "react"
import { Card, Header, CardContent, CardMeta, Confirm, Button, Icon, Form, Grid} from "semantic-ui-react"
import { AuthConsumer, } from "../providers/AuthProvider";


class Adventure extends React.Component {

  state = {
    xaxis: 0,
    yaxis: 0,
    hypo: 0,
    }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  handleChange = (e) => {
    const { target: { name, value, } } = e;
    this.setState( {[name]: value} )
    // newhypo = Math.round(newhypo)
    // this.handleHypo(newhypo)
  }
  
  handleHypo = () => {
    this.setState({hypo: Math.round(Math.hypot(this.state.xaxis, this.state.yaxis))})
  }

  render() {
    const { xaxis, yaxis, hypo} = this.state
    const { auth: { user }, } = this.props;

    return (
      <Grid style={{marginTop: "10px"}}>
        <Form inverted onSubmit={this.handleHypo}>
          <Header inverted>Hypotenuse Calculator</Header>
          <Form.Group inline widths="equal">
            <Form.Field>
              <Form.Input
                label="Distance (ft)"
                type="number"
                name="xaxis"
                value={xaxis}
                min={0}
                onChange={this.handleChange}
                required
                labelPosition="left"
                fluid
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Height (ft)"
                type="number"
                name="yaxis"
                value={yaxis}
                min={0}
                onChange={this.handleChange}
                required
                labelPosition="left"
                fluid
              />
            </Form.Field>
            <Form.Field>
              <Button color="green" size="tiny"  >
              True Distance: 
              </Button>
              <Header inverted style={{marginTop: "5px"}}>
                {hypo} ft'
              </Header>
            </Form.Field>
          </Form.Group>
        </Form>
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