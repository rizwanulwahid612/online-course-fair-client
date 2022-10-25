import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthProviderContext';

const Registration = () => {
    const [error,setError]=useState('')
    const [disable,setDisable]=useState(true)

    const {userRegistration,userLogin}=useContext(AuthContext)
    
    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const photoURl=form.photoURL.value;
        const email = form.email.value;
        const password= form.password.value;
        console.log(name,photoURl,email,password)
        userRegistration(email,password)
        .then((result) => {
          const user = result.user;
          console.log(user)
          
        })
        .catch((error) => {
          console.error(error)
          setError(error.message);
        });
      }
    
        return (
            <Form onSubmit={handleSubmit} className='mx-auto' style={{marginTop:'80px'}}>
                <h1>Please Registration</h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control name='name' type="text" placeholder="Enter your full Name" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control name='photoURL' type="text" placeholder="Photo URL"/>
            </Form.Group>    
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name='email' type="email" placeholder="Enter email" required/>
            </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            {error}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">

            <Form.Check onClick={()=>setDisable(!disable)} type="checkbox" label="Are you sure to register your account?" />
              </Form.Group>
            <Button 
            disabled={disable}
            variant="primary" type="submit">
                
              Register
            </Button>
          </Form>
        );
    };


export default Registration;