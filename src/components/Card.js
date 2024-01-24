import Card from 'react-bootstrap/Card';
import './components.css'


function MemberCard ({name, role, image, blurb}) {
    return (
        <Card className="card" style={{ width: '22rem' }}>
        <Card.Img className="image" variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{role}</Card.Subtitle>
          <Card.Text>
            {blurb}
          </Card.Text>
        </Card.Body>
      </Card>
    );

}

export default MemberCard