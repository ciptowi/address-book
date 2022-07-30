import axios from "axios";
import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";

function CreateContact() {
  const [open, setOpen] = React.useState(false);
  const [contact, setContact] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const cancelCreate = () => {
    setContact({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    setOpen(false);
  };

  const createNewContact = () => {
    axios
      .post("http://localhost:5000/api/v1/contact/", contact)
      .then((res) => {
        alert(res.data.message);
        setOpen(false);
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
        setOpen(false);
      });
  };

  return (
    <>
      <Button
        basic
        size="mini"
        color="green"
        compact
        onClick={() => setOpen(true)}
      >
        Create new
      </Button>

      <Modal
        size="tiny"
        open={open}
        closeOnDimmerClick={false}
        onClose={() => setOpen(false)}
      >
        <Modal.Header>Create New Contact</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <input
                type="text"
                placeholder="Contact Name"
                value={contact.name}
                onChange={(e) =>
                  setContact({ ...contact, name: e.target.value })
                }
              />
            </Form.Field>
            <Form.Field>
              <input
                type="email"
                placeholder="Email"
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                placeholder="Phone"
                value={contact.phone}
                onChange={(e) =>
                  setContact({ ...contact, phone: e.target.value })
                }
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                placeholder="Address"
                value={contact.address}
                onChange={(e) =>
                  setContact({ ...contact, address: e.target.value })
                }
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={cancelCreate}>Back</Button>
          <Button positive onClick={createNewContact}>
            Create
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default CreateContact;
