import axios from "axios";
import React from "react";
import { Icon, Button, Modal } from "semantic-ui-react";

function DeleteProduct(props) {
  const [open, setOpen] = React.useState(false);
  const { id, product } = props;
  const token = localStorage.getItem("token");

  const deleteProduct = () => {
    if (!token) {
      alert(`you don't have permisions`);
    } else {
      axios
        .delete(`https://test-binar.herokuapp.com/v1/products/${id}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          if (res.data.status == "OK") {
            alert(`${product} has been deleted`);
            setOpen(false);
          } else {
            alert(`can't be delete`);
            setOpen(false);
          }
        })
        .catch((err) => {
          alert(err);
          setOpen(false);
        });
    }
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
            <strong>{product}?</strong>
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button className="btn" positive onClick={() => setOpen(false)}>
            No
          </Button>
          <Button className="btn" negative onClick={deleteProduct}>
            Yes, delete it
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default DeleteProduct;
