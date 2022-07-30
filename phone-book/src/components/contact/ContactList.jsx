import axios from "axios";
import React from "react";
import { Card, Container, Feed, Grid, Icon, Loader } from "semantic-ui-react";
import ContactDetail from "./ContactDetail";
import DeleteContact from "./DeleteContact";
import EditContact from "./EditContact";

function ContactList() {
  const [contact, setContact] = React.useState([]);

  const getContact = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/contact");
    if (res.data.data.length) {
      setContact(res.data.data);
    }
  };
  React.useEffect(() => {
    getContact();
  }, []);
  return (
    <Container>
      <Grid centered stackable>
        {contact.length ? (
          <Grid.Row centered stretched>
            <Grid.Column>
              {contact.map((person, index) => (
                <Card link>
                  <Card.Content key={index}>
                    <Feed>
                      <Feed.Event>
                        <Icon
                          name="user circle"
                          color="blue"
                          size="huge"
                        ></Icon>
                        <Feed.Content>
                          <Feed.Summary as="a">{person.name}</Feed.Summary>
                          <Feed.Content content={person.phone} />
                        </Feed.Content>
                      </Feed.Event>
                    </Feed>
                    <Grid relaxed columns={3}>
                      <Grid.Column>
                        <ContactDetail
                          id={person.id}
                          name={person.name}
                          email={person.email}
                          phone={person.phone}
                          address={person.address}
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <EditContact
                          id={person.id}
                          name={person.name}
                          email={person.email}
                          phone={person.phone}
                          address={person.address}
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <DeleteContact id={person.id} name={person.name} />
                      </Grid.Column>
                    </Grid>
                  </Card.Content>
                </Card>
              ))}
            </Grid.Column>
          </Grid.Row>
        ) : (
          <div>
            <Loader active>Loading</Loader>
          </div>
        )}
      </Grid>
    </Container>
  );
}

export default ContactList;
