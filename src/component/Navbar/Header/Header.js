import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className='text-white my-2 my-lg-0 w-50' style={{marginLeft:'100px'}}>Online Course Fair</Navbar.Brand>
        <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/courses'>Courses</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
           
          </Nav>
          <Form className="d-flex mx-auto my-2 my-lg-0 w-50">
          
           <Button variant="outline-success">LogOut</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;