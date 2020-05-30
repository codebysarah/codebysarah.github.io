import React from 'react';
//import profile from './assets/profile.png';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/App.css';
import { Navbar, Nav, Container} from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="mailto:codebysarah@gmail.com">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="App"> 
        <Main></Main>
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;
