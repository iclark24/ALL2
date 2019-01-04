import React, {Fragment} from "react";
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'


class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Fragment>
          <Link to='/characters'>
          <Menu.Item
            name='Characters'
            id='characters'
            active={this.props.location.pathname === '/characters'}
            />
          </Link>

          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              onClick={ () => handleLogout(this.props.history) }
              />
          </Menu.Menu>
        </Fragment>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  
  render() {
    const { auth: { user, handleLogout, }, location, } = this.props;
    return (
      <div>
        <Menu size="huge" pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='Home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
            { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);