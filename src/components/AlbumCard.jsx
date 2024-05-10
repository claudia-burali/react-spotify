import { Card, Col } from 'react-bootstrap';

const AlbumCard =  ({ singleSong }) => {
    return (
      <Col className="text-center">
        <Card>
          <Card.Img variant="top" src={singleSong.album.cover_medium} alt="track" />
          <Card.Body>
            <Card.Title>Track: "{singleSong.title}"</Card.Title>
            <Card.Text>
              Artist: {singleSong.artist.name}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }

export default AlbumCard
