import React from 'react';
import '../styles/footer.css';
import { Row, Col } from 'react-bootstrap';
import Birdy from '../components/Birdy';

function Footer(props) {

  return (
    <div className="justify-content-center">
      <Row className="footer">
        <Birdy visible={props.visible} onClick={props.onClick}></Birdy>
        <Col sm={6} className="links-container">
          <a className="links footer-links"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/codebysarah/codebysarah.github.io/tree/source">
            Made with &hearts;, React & Github Pages.</a>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
