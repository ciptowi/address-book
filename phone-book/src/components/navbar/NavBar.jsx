import React from "react";
import { Menu } from "semantic-ui-react";
import CreateProduct from "../contact/CreateContact";

function NavBar() {
  return (
    <>
      <Menu stackable size="large">
        <Menu.Item header>MY CONTACT</Menu.Item>
        <Menu.Item as="a">
          <CreateProduct />
        </Menu.Item>
      </Menu>
    </>
  );
}

export default NavBar;
