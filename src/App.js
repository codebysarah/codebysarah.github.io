import React, { useState } from 'react';
import Main from './components/Main';
import NerdyBirdy from './components/NerdyBirdy';
import './styles/App.css';
import { Navbar, Nav, Container, Popover, OverlayTrigger} from 'react-bootstrap';

function App() {

  const [game, setGame] = useState(false);
  const [played, setPlayed] = useState(false);

  const gameOn = () => {
    setGame(true);
    setPlayed(true);
  }

  const gameOff = () => setGame(false);


  const popover = (
    <Popover id="popover-basic" className="popover-text">
      <Popover.Content>
        <strong>codebysarah@gmail.com</strong>
      </Popover.Content>
    </Popover>
  );

  return (
    <div>
      <Navbar expand="sm" className="elsie">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="active" onClick={gameOff} 
              href="#">{game ? 'Exit Game' : 'Home'}</Nav.Link>
            <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popover}>
              <Nav.Link href="mailto:codebysarah@gmail.com">Contact</Nav.Link>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="App"> 
        { game ? <NerdyBirdy></NerdyBirdy> : 
          <Main played={played} onClick={gameOn} visible={!game}></Main> }
      </Container>
    </div>
  );
}

export default App;
