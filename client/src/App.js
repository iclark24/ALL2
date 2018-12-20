import React, { Component } from 'react';
import Characters from "./components/Characters"
import Navbar from "./components/Navbar"
import { Route, Switch, } from 'react-router-dom';
import {Container} from "semantic-ui-react"
import NoMatch from "./components/NoMatch"
import CharacterForm from "./components/CharacterForm"
import CharDetails from "./components/CharDetails"
import ClassForm from "./components/ClassForm"

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Container>
          <Switch>
            <Route exact path="/" component={Characters} />
            <Route exact path="/characters" component={Characters} />
            <Route exact path="/characters/new" component={CharacterForm}/>
            <Route exact path="/characters/:id" component={CharDetails}/>
            <Route exact path="/characters/:character_id/cc_lasses/new" component= {ClassForm}/>
            <Route component={NoMatch} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
