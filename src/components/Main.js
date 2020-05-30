import React from 'react';
import profile from '../assets/profile.png';
import { Row, Col } from 'react-bootstrap';
import '../styles/main.css';

function Main() {
  return (
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
            with a focus on full-stack web development. My professional experience
            spans operating system programming at big tech, to web development at
            small startups. I believe in creating engaging, user-centric digital
            experiences, and am a forever-student of design. Feel free to <a
            className="links" href="mailto:codebysarah@gmail.com">drop me a
            line</a>.</p>
        </Row>
      </Col>
    </Row>
  );
}

export default Main;
