import axios from "axios";
import React from "react";
import { Icon, Button, Modal } from "semantic-ui-react";

function DeleteContact(props) {
  const [open, setOpen] = React.useState(false);
  const { id, name } = props;

  const deleteContact = () => {
    axios
      .delete(`http://localhost:5000/api/v1/contact/${id}`)
      .then((res) => {
        alert(`Contact ${name} deleted`);
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
      <Icon
        color="red"
        name="trash"
        className="right floated link"
        onClick={() => setOpen(true)}
      />

      <Modal size="mini" open={open} onClose={() => setOpen(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Content textAlign="center">
          <p className="center">
            Are you sure you want to delete <br />
            <strong>{name}?</strong>
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={() => setOpen(false)}>
            No
          </Button>
          <Button negative onClick={deleteContact}>
            Yes, delete it
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default DeleteContact;
