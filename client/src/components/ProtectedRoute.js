import React from "react";
import { Route, Redirect, } from "react-router-dom";
import { AuthConsumer, } from "../providers/AuthProvider";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => (
  <Route 
    { ...rest }
    render={ props => (
      auth.authenticated ?
        <Component { ...props } />
      :
        <Redirect 
          to={{
            pathname: "/login",
            state: { from: props.location, },
          }}
        />
    )}
  />
)

const ConnectedProtectedRoute = (props) => (
  <AuthConsumer>
    { auth => 
      <ProtectedRoute { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedProtectedRoute;
