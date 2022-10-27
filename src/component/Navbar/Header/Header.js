import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProviderContext';
import './Header.css'
import { toast } from 'react-hot-toast';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { BiBook } from "react-icons/bi";

const Header = () => {
  
  const{logOut,user}=useContext(AuthContext)

  const userLogOut=()=>{
    logOut()
    .then(() => {
      toast.success('Sign-out successful.') 
    }).catch((error) => {
      console.log(error)
    });
  }
  return (
    <div className=''>

        
       
    
    <Navbar  bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand  className='text-white my-2 my-lg-0 w-50' style={{marginLeft:'100px',display:'flex'}}><h2 style={{color:'red'}}><BiBook/></h2> <h2 style={{color:'green'}}>Online Course Fair</h2> </Navbar.Brand>
        
        <Navbar.Toggle style={{backgroundColor:'white'}} aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
    
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
  



            <Link to='/courses'>Courses</Link>
            <Link to='/blog'>Blog</Link>
   
            <Link to="/profile">
           
            <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">{user?.displayName}</Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <Button
          variant="light"
          {...triggerHandler}
          className="d-inline-flex align-items-center"
        >
          {user?.photoURL?
                 <Image ref={ref}
                  style={{height:'30px'}} roundedCircle src={user?.photoURL}></Image>  
                 :
                 <FaUser></FaUser>
                }
          <span className="ms-1"></span>
        </Button>
      )}
    </OverlayTrigger>
     
               
            </Link>
            {
            user?.uid?
            <>
        <Form className="d-flex mx-auto my-2 my-lg-0 w-50">
          
          <Button style={{marginLeft:'25px'}} onClick={userLogOut} variant="outline-success">LogOut</Button>
        </Form>
            
            </>

            :
            <>
             {/* <Link to='/register'>Register</Link> */}
            <Link to='/login'>Login</Link>
        
            </>
            }
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  );
}

export default Header;