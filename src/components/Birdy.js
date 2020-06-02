import React from 'react';
import birdy from '../assets/birdy.png';
import '../styles/birdy.css';

function Birdy(props) {

  if (props.visible) {
    return (
      <div className={ props.prompt ? "birdy" : "birdy birdy-animate"}>
        <img src={birdy} onClick={props.onClick} className="birdy-img" alt="" />
      </div>
    );
  }
  return (null);
}

export default Birdy;
