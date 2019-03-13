import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Grid, Header} from 'semantic-ui-react';
import {World} from '../Styles/backgrounds'
import {Container, } from "../Styles/home"


class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', dci: '', name: '' }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation, dci, name } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;
    if (password.length < 8)
      alert("Password must be 8 or more characters")
    else if (password === passwordConfirmation)
      handleRegister({ email, password, passwordConfirmation, dci, name }, history);
    else
      alert('Passwords Do Not Match!')
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, dci, name, passwordConfirmation } = this.state;
  
    return (
      <World>
        <Container>
          <Segment>
            <Header as='h1' textAlign='center'>Register</Header>
                <Form size="huge" widths="equal" onSubmit={this.handleSubmit}>
                  <Form.Input
                    label="Email"
                    autoFocus
                    required         
                    name='email'
                    value={email}
                    placeholder='Email'
                    onChange={this.handleChange}
                    />
                  <Form.Input
                    label="Name"
                    required         
                    name='name'
                    value={name}
                    placeholder='Name'
                    onChange={this.handleChange}
                    />
                  <Form.Input
                    label="DCI#"
                    required         
                    name='dci'
                    value={dci}
                    placeholder='DCI#'
                    onChange={this.handleChange}
                    />
                  <Form.Input
                    label="Password"
                    required
                    name='password'
                    value={password}
                    placeholder='Must Be 8 Characters Minimum'
                    type='password'
                    onChange={this.handleChange}
                    />
                  <Form.Input
                    label="Password Confirmation"
                    required
                    name='passwordConfirmation'
                    value={passwordConfirmation}
                    placeholder='Must Match'
                    type='password'
                    onChange={this.handleChange}
                    />
                  <Segment textAlign='center' basic>
                    <Button primary type='submit'>Submit</Button>
                  </Segment>
                </Form>
          </Segment>
        </Container>
      </World>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
      { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
      )
    }
  }