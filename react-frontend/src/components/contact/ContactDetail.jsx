import React from "react";
import { Grid, Icon, List, Modal } from "semantic-ui-react";
import DeleteContact from "./DeleteContact";
import EditContact from "./EditContact";

function ContactDetail(props) {
  const [open, setOpen] = React.useState(false);
  const { id, name, email, phone, address } = props;
  return (
    <>
      <Icon
        color="green"
        name="info circle"
        className="right floated link"
        onClick={() => setOpen(true)}
      />

      <Modal size="tiny" open={open} onClose={() => setOpen(false)}>
        <Modal.Content>
          <Grid columns={2}>
            <Icon name="user circle" size="massive" color="blue" />
            <List>
              <List.Item>
                <List.Icon name="user" />
                <List.Content>{name}</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="phone" />
                <List.Content>{phone}</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="mail" />
                <List.Content>
                  <a href="mailto:jack@semantic-ui.com">{email}</a>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="marker" />
                <List.Content>{address}</List.Content>
              </List.Item>
            </List>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <EditContact
            id={id}
            name={name}
            email={email}
            phone={phone}
            address={address}
          />
          <DeleteContact id={id} name={name} />
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default ContactDetail;
