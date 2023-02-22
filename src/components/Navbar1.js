import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const Navbar1 = () => {
  return (

    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">MySite</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll>

            <div className= "Container">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-link">
                  <NavLink  to= {'/home'}>Home</NavLink>
                </li>
                <li className="nav-link">
                <NavLink  to= {'/login'}>Login</NavLink>
                </li>
                <li className="nav-link">
                <NavLink  to= {'/services'}>Services</NavLink>
                </li>
                <li className="nav-link">
                <NavLink  to= {'/movies'}>Movies</NavLink>
                </li>
                <li className="nav-link">
                <NavLink  to= {'/hooks'}>Hooks</NavLink>
                </li>
                <li className="nav-link">
                <NavLink  to= {'/api'}>Api</NavLink>
                </li>

                </ul>
            </div>
          
         
          
          
          
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  
  );
}

export default Navbar1;