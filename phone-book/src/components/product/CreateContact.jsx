import axios from "axios";
import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";

function CreateProduct() {
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const token = localStorage.getItem("token");

  const cancelCreate = () => {
    setProduct({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
    setOpen(false);
  };

  const createProduct = () => {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .put("https://test-binar.herokuapp.com/v1/products/", product, config)
      .then((res) => {
        if (res.status == 201) {
          alert(`Product Created`);
        } else {
          alert(`Not be create`);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const createNew = async () => {};
  return (
    <>
      <Button onClick={() => setOpen(true)}>Create new</Button>

      <Modal
        size="tiny"
        open={open}
        closeOnDimmerClick={false}
        onClose={() => setOpen(false)}
      >
        <Modal.Header>Create New</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <input
                type="text"
                placeholder="Contact Name"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                placeholder="Email"
                value={product.email}
                onChange={(e) =>
                  setProduct({ ...product, email: e.target.value })
                }
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                placeholder="Phone"
                value={product.phone}
                onChange={(e) =>
                  setProduct({ ...product, phone: e.target.value })
                }
              />
            </Form.Field>
            <Form.Field>
              <input
                type="text"
                placeholder="Address"
                value={product.address}
                onChange={(e) =>
                  setProduct({ ...product, address: e.target.value })
                }
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={cancelCreate}>Back</Button>
          <Button positive onClick={createNew}>
            Create
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default CreateProduct;
