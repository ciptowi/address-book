import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Table } from "semantic-ui-react";
import NavBar from "../navbar/NavBar";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";

function ProductList() {
  const [contact, setContact] = React.useState([]);

  console.log(contact);

  const getContact = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/contact");
    setContact(res.data.data);
  };
  React.useEffect(() => {
    getContact();
  }, []);
  return (
    <Container>
      <NavBar />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <a>Jimmy</a>
            </Table.Cell>
            <Table.Cell>Cannot pull data</Table.Cell>
            <Table.Cell>None</Table.Cell>
            <Table.Cell>None</Table.Cell>
            <Table.Cell>
              <EditProduct
                id={contact.id}
                name={contact.name}
                email={contact.email}
                phone={contact.phone}
                address={contact.address}
              />
              <DeleteProduct id={contact.id} />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  );
}

export default ProductList;
