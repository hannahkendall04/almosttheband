import Card from 'react-bootstrap/Card';
import './components.css'

function UpdateCard() {
  return (
    <div className="homeCard">
      <Card border="dark" style={{ width: '45rem' }}>
        <Card.Header>Updates</Card.Header>
        <Card.Body>
          <Card.Title>Upcoming Shows: DATE</Card.Title>
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