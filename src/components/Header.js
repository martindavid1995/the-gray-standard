import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom'
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Header() {
  const navigate = useNavigate();

  function handleClick(link){
    navigate(link);
  }

    return (  
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>The Gray Standard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleClick('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => handleClick('/Services')}>Services</Nav.Link>
            <Nav.Link onClick={() => handleClick('/AboutUs')}>About Us</Nav.Link>
            <Nav.Link onClick={() => handleClick('/Contact')}>Contact</Nav.Link>
            <Nav.Link onClick={() => handleClick('/Gallery')}>Gallery</Nav.Link>
            <Nav.Link onClick={() => handleClick('/Testimonials')}>Testimonials</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.facebook.com/TheGrayStandardLLC">
              <FaFacebook size={20} className="me-2" />
            </Nav.Link>
            <Nav.Link href="#">
              <FaInstagram size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

