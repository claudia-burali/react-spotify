import React from 'react';
import { Row, Col } from 'react-bootstrap';
import plbtn1 from '../assets/playerbuttons/shuffle.png';
import plbtn2 from '../assets/playerbuttons/prev.png';
import plbtn3 from '../assets/playerbuttons/play.png';
import plbtn4 from '../assets/playerbuttons/next.png';
import plbtn5 from '../assets/playerbuttons/repeat.png';


const SpotifyPlayer = () => {
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={{ span: 10, offset: 2 }}>
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#6">
                  <img src={plbtn1} alt="shuffle" />
                </a>
                <a href="#7">
                  <img src={plbtn2} alt="prev" />
                </a>
                <a href="#8">
                  <img src={plbtn3} alt="play" />
                </a>
                <a href="#9">
                  <img src={plbtn4} alt="next" />
                </a>
                <a href="#10">
                  <img src={plbtn5} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SpotifyPlayer;
