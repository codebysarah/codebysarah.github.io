import React from 'react';
import birdy from '../assets/birdy.png';
import '../styles/birdy.css';
import {Col} from 'react-bootstrap'; 

function Birdy(props) {

  if (props.visible) {
    return (
      <Col sm={4} className="birdy-container">
        <img src={birdy} onClick={props.onClick} className="birdy" alt="" />
      </Col>);
  }
  return (null);
}

export default Birdy;
