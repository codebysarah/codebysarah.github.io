import React from 'react';
import profile from '../assets/profile.png';
import { Row, Col } from 'react-bootstrap';
import '../styles/main.css';
import Footer from '../components/Footer';

function Main(props) {
  return (
    <div>
      <Row className="main">
        <Col sm={4} className="picture-frame">
          <img className="profile-pic" src={profile} alt=""/>
        </Col>
        <Col sm={8}>
          <Row>
            <p className="typewriter name-header">Hi! I'm Sarah.</p>
          </Row>
          <Row>
            <p className="bio">I'm a Seattle-based software engineer
              with a strong interest in product and user-centric design. 
              My professional experience spans operating system programming 
              at big tech, to web development at small startups. 
              I believe in creating engaging digital experiences, and am a 
              forever-student of design. Feel free to <a className="links" 
              href="mailto:codebysarah@gmail.com">drop me a line</a>.</p>
          </Row>
        </Col>
      </Row>
      <Footer onClick={props.onClick} visible={props.visible}></Footer>
    </div>
  );
}

export default Main;
