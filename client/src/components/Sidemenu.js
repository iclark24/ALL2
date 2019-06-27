import React from "react"
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { AuthConsumer, } from "../providers/AuthProvider";


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
          <Button icon basic inverted disabled={visible} onClick={this.handleShowClick}>
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
              inverted
              onHide={this.handleSidebarHide}
              vertical
              visible={visible}
              width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
                Placeholder
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