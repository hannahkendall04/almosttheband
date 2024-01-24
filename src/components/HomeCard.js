import Card from 'react-bootstrap/Card';

function HomeCard() {
  return (
    <div>
      <Card border="dark" style={{ width: '45rem' }}>
        <Card.Header>Updates</Card.Header>
        <Card.Body>
          <Card.Title>Next Show: TBD</Card.Title>
          <Card.Text>
            We don't currently have a next show scheduled. 
            Follow us on FaceBook or Instagram to stay up to date with our shows!
            Check out our Contact page if you're intereseted in having us play at 
            your venue or event.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
  );
}

export default HomeCard;