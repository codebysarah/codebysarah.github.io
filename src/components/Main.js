import React from 'react';
import profile from '../assets/profile.png';
import { Row, Col } from 'react-bootstrap';
import '../styles/main.css';
import Footer from '../components/Footer';

function Main(props) {
  return (
    <>
      <Row className="main">
        <Col sm={4} className="picture-frame">
          <img className="profile-pic" src={profile} alt=""/>
        </Col>
        <Col sm={8} md={6}>
          <Row>
            <p className="name-header">Hi! I&#8217;m Sarah.</p>
          </Row>
          <Row>
            <p className="bio">I'm a full-stack software engineer
              with a strong background in user-centric design. 
              My professional experience spans operating system programming 
              at big tech, to web development at small startups. 
              I believe in creating engaging & humane digital experiences, and am a forever-student of design (always learning)! I'm currently based in Austin and take on occasional projects, balancing work life with #MomLife. I also <a className="links" rel="noopener noreferrer" href="https://www.sarahdandia.com/" target="_blank">dabble in the arts</a>. 
               Feel free to drop me a line!</p>
          </Row>
        </Col>
      </Row>
      <Footer prompt={props.played} onClick={props.onClick} visible={props.visible}></Footer>
    </>
  );
}

export default Main;
