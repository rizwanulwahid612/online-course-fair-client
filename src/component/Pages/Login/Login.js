import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProviderContext';

const Login = () => {
 
  const [error,setError]=useState('')
  const {userLogin,loading,setLoading,user}=useContext(AuthContext);

  const handleSubmit =(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password= form.password.value;
    console.log(email,password)
    
      userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
        form.reset('')
        setError('')
        if(user?.emailVerified){
          toast.success('successfully login')
        }
        else{
          toast.error('email is not varified')
        }
       
      })
      .catch((error) => {
        console.error(error)
        setError(error.message);
      })
      .finally(()=>{
        setLoading(false)
      })
    
  }
    return (
        <Form onSubmit={handleSubmit} className='mx-auto' style={{justifyContent:'center',alignItems:'center',marginTop:'80px'}}>
            <h1>Please Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        {error}
        <Form.Group className="mb-3">
        <p>You don't have any account ? Please <Link to='/register'>registration</Link></p>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    );
};

export default Login;