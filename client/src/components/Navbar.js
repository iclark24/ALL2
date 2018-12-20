import React from "react";
import { NavLink, } from "react-router-dom";
import {Menu} from "semantic-ui-react"



const Navbar = () => (
  <Menu>
    <NavLink exact activeStyle={styles.active} to="/characters">
      <Menu.Item>Characters</Menu.Item>
    </NavLink>
  </Menu>
)

const styles = {
  active: {
    textDecoration: "none",
    fontWeight: "bold",
    color: "black",
  }
};

export default Navbar;