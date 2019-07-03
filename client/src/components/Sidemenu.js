import React from "react"
import { Button, Header, Icon, Rail, Menu, Sticky, Sidebar } from 'semantic-ui-react'
import { AuthConsumer, } from "../providers/AuthProvider";
import JJH from "./JJH"


class SideMenu extends React.Component {

  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state
    const { auth: { user }, } = this.props;

    return (
      <>
        <Button.Group>
          <Button icon basic inverted disabled={visible} onClick={this.handleShowClick} style={{position: "fixed"}}>
            <Icon circular name="bars"/>
          </Button>
          {/* <Button disabled={!visible} onClick={this.handleHideClick}>
            Hide sidebar
          </Button> */}
        </Button.Group>
        <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              onHide={this.handleSidebarHide}
              vertical
              inverted
              visible={visible}
              width='wide'
          >
            <Menu.Item>
              <JJH/>
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
                Placeholder
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
                Placeholder
            </Menu.Item>
          </Sidebar>
      </>
    )
  }

}

const ConnectedSideMenu = (props) => (
  <AuthConsumer>
    { auth => 
      <SideMenu { ...props } auth={auth} />
    }
  </AuthConsumer>
)

export default ConnectedSideMenu