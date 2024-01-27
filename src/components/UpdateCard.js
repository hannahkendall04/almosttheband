import Card from 'react-bootstrap/Card';

function UpdateCard() {
  return (
    <div>
      <Card border="dark" style={{ width: '90vm' }}>
        <Card.Header>Updates</Card.Header>
        <Card.Body>
          <Card.Title>Upcoming Shows: Northside Bar & Grill, 2/10</Card.Title>
          <Card.Text>
            Come see us at our next show! 
            We are playing at Northside Bar & Grill on Saturday, Febuary 10th from 8pm-11pm.
            We have some new songs on the setlist! Hope to see you there!
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
  );
}

export default UpdateCard;