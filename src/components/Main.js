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
              with a strong foundation in user-centric design. 
              My experience spans operating system development at leading tech companies,
              to building high impact web applications for startups.  
              I'm passionate about crafting intuitive and engaging digital experiences. Based 
              in Austin, I take on select projects while balancing work with family life. I also <a className="links" rel="noopener noreferrer" href="https://www.watercolorbysarah.com/" target="_blank">dabble in the arts</a>. 
               Lets connect!</p>
          </Row>
        </Col>
      </Row>
      <Footer prompt={props.played} onClick={props.onClick} visible={props.visible}></Footer>
    </>
  );
}

export default Main;
