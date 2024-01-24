import Card from 'react-bootstrap/Card';

function UpdateCard() {
  return (
    <div>
      <Card border="dark" style={{ width: '45rem' }}>
        <Card.Header>Updates</Card.Header>
        <Card.Body>
          <Card.Title>Next Show: DATE</Card.Title>
          <Card.Text>
            Come see us at our next show! 
            We are playing at BLANK on BLANK.
            All ages are welcome!
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
  );
}

export default UpdateCard;