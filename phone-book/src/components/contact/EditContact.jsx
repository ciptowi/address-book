import axios from "axios";
import React from "react";
import { Icon, Button, Modal, Form } from "semantic-ui-react";

function EditContact(props) {
  const [open, setOpen] = React.useState(false);
  const [contact, setContact] = React.useState(props);

  const cancelUpdate = () => {
    setContact(props);
    setOpen(false);
  };
  const updatecontact = () => {
    axios
      .put(`http://localhost:5000/api/v1/contact/${contact.id}`, contact)
      .then((res) => {
        alert(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <Icon
        color="blue"
        name="edit"
        className="right floated link"
        onClick={() => setOpen(true)}
      />

      <Modal
        size="tiny"
        open={open}
        closeOnDimmerClick={false}
        onClose={() => setOpen(false)}
      >
        <Modal.Header>Edit Contact</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <input
                value={contact.name}
                onChange={(e) =>
                  setContact({ ...contact, name: e.target.value })
                }
                required
              />
            </Form.Field>
            <Form.Field>
              <input
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
                required
              />
            </Form.Field>
            <Form.Field>
              <input
                value={contact.phone}
                onChange={(e) =>
                  setContact({ ...contact, phone: e.target.value })
                }
                required
              />
            </Form.Field>
            <Form.Field>
              <input
                value={contact.address}
                onChange={(e) =>
                  setContact({ ...contact, address: e.target.value })
                }
                required
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={cancelUpdate}>Back</Button>
          <Button positive onClick={updatecontact}>
            Update
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default EditContact;
