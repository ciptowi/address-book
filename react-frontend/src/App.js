import React from "react";
import { Container } from "semantic-ui-react";
import ContactList from "./components/contact/ContactList";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <Container>
      <NavBar />
      <ContactList />
    </Container>
  );
}

export default App;
