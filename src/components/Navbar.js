import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">malvin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <span className='navbar-toggler-icon'>
        </span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <span className='navbar-text'> 
            <div className='social-icon'>
                <a href="#"><img src="" alt=""></img></a>
                <a href="#"><img src="" alt=""></img></a>
                <a href="#"><img src="" alt=""></img></a>
            </div>
            <button className=''></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

    </div>
  )
}

export default Navbar