import React, { Component, Fragment } from 'react';
import Characters from "./components/Characters"
import Home from './components/Home';
import Login from "./components/Login"
import Register from './components/Register'
import Navbar from "./components/Navbar"
import { Route, Switch, } from 'react-router-dom';
import {Container} from "semantic-ui-react"
import NoMatch from "./components/NoMatch"
import CharacterForm from "./components/CharacterForm"
import CharDetails from "./components/CharDetails"
import ClassForm from "./components/ClassForm"
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import AdvForm from './components/AdvForm'
import {World} from './Styles/backgrounds'

class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <FetchUser>
          <World>
            <Container style={{ paddingTop: "50px"}}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <ProtectedRoute exact path="/characters" component={Characters} />
                <ProtectedRoute exact path="/characters/new" component={CharacterForm}/>
                <Route exact path="/characters/:id" component={CharDetails}/>
                <ProtectedRoute exact path="/characters/:character_id/cc_lasses/new" component= {ClassForm}/>
                <ProtectedRoute exact path="/characters/:character_id/adventures/new" component= {AdvForm}/>
                <Route component={NoMatch} />
              </Switch>
            </Container>
          </World>
        </FetchUser>
      </>
    );
  }
}

export default App;
