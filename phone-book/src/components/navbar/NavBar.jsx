import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import CreateProduct from "../product/CreateContact";

function NavBar() {
  return (
    <>
      <Menu stackable size="large">
        <h3>My Contact</h3>
        <CreateProduct />
      </Menu>
    </>
  );
}

export default NavBar;
