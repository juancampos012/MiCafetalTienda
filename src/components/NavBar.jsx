import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import CartWidget from './CarWidget';

const Naavbar = () =>{
    return (
      <Navbar bg="light" expand="lg" style={{position: 'fixed', top: 0, right: 0, width: '100%'}}>
        <Navbar.Brand href="" style={{marginLeft: '15px'}}>Mi cafetal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar" />
        <Navbar.Collapse id="basic-navbar">
          <Nav className="NavBar" style={{marginLeft:'10%'}}>
            <Nav.Link href="">Productos</Nav.Link>
            <Nav.Link href="">Procesos</Nav.Link>
            <Nav.Link href="">Distribuidor</Nav.Link>
            <Nav.Link href="">Quienes somos</Nav.Link>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  

export default Naavbar;

