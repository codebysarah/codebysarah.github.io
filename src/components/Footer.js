import React from 'react';
import '../styles/footer.css';
import { Row, Col } from 'react-bootstrap';
import Birdy from '../components/Birdy';

function Footer(props) {

  return (
    <div className="footer">
      <Row className="align-items-end">
        <Col md={6} className="links-container">
          <a className="links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/codebysarah/codebysarah.github.io/tree/source">
              made with &hearts; and React</a>
        </Col>
          <Col md={1} className="birdy-container" onClick={props.onClick}>
            <Birdy prompt={props.prompt} visible={props.visible} ></Birdy>
          </Col>
          <Col md={5} className="bubble">
            <p className={props.prompt ? "speech-bubble-hidden" : "speech-bubble"} onClick={(props.visible && !props.prompt) ? props.onClick : null}>
              I can't seem to fly! Can you help me?
            </p>
          </Col>
      </Row>
    </div>
  );
}

export default Footer;
