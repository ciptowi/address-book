import axios from "axios";
import React from "react";
import { Icon, Button, Modal, Form } from "semantic-ui-react";

function EditProduct(props) {
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState({
    name: props.name,
    price: props.price,
    imageurl: props.imageurl,
  });
  const id = props.id;
  const token = localStorage.getItem("token");

  const cancelUpdate = () => {
    setProduct({
      name: props.name,
      price: props.price,
      imageurl: props.imageurl,
    });
    setOpen(false);
  };

  const updateProduct = () => {
    axios
      .put(`https://test-binar.herokuapp.com/v1/products/${id}`, product, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          alert(`Product ${product.name} updated`);
        } else {
          alert(res.data.message);
        }
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
        <Modal.Header>Edit: {product.name}</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <input
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                required
              />
            </Form.Field>
            <Form.Field>
              <input
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
                required
              />
            </Form.Field>
            <Form.Field>
              <input
                value={product.imageurl}
                onChange={(e) =>
                  setProduct({ ...product, imageurl: e.target.value })
                }
                required
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={cancelUpdate}>Back</Button>
          <Button positive onClick={updateProduct}>
            Update
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default EditProduct;
