import React, { useContext } from 'react';
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
        
            {user?.email?
            <>
             <Link to="/profile">
                {user?.photoURL?
                 <Image style={{height:'30px'}} roundedCircle src={user?.photoURL}></Image>  
                 :
                 <FaUser></FaUser>
                }
              </Link>
            
            </>
            :
            <>
              <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            </>
         
            
            }
           
          </Nav>
          <Form className="d-flex mx-auto my-2 my-lg-0 w-50">
          
           <Button onClick={userLogOut} variant="outline-success">LogOut</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;