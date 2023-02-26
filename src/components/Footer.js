import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function Footer() {
  return (
    <Navbar bg="light" expand="lg" fixed="bottom">
      <p className='mx-auto'>The Gray Standard &copy; {new Date().getFullYear()}</p>
    </Navbar>
  );
}