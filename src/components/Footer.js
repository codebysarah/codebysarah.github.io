import React from 'react';
import '../styles/footer.css';
import { Row, Col } from 'react-bootstrap';
import Birdy from '../components/Birdy';

function Footer(props) {

  return (
    <div className="footer">
      <Row className="footer justify-content-center align-items-center">
        <Col md={{span:3}} className="links-container">
          <a className="links"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/codebysarah/codebysarah.github.io/tree/source">
              Made with &hearts; and React</a>
        </Col>
          <Col md={1} className="birdy-container">
            <Birdy prompt={props.prompt} visible={props.visible} onClick={props.onClick}></Birdy>
          </Col>
          <Col md={2} className="birdy-container">
            <p className={props.prompt ? "speech-bubble-hidden" : "speech-bubble"}>
              I can't seem to fly! Can you help me?
            </p>
          </Col>
      </Row>
    </div>
  );
}

export default Footer;
