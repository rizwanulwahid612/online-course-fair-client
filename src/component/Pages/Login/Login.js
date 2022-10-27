import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProviderContext';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { GoMarkGithub } from "react-icons/go";
import { ImGoogle2 } from "react-icons/im";
import Header from '../../Navbar/Header/Header';

const Login = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from.pathname || '/';
  const [error,setError]=useState('')
  const {userLogin,loading,setLoading,user,setUser,googleLoginPopNotification,githubLoginuser,userVerification}=useContext(AuthContext);
  

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
          navigate(from,{replace:true})
          toast.success('successfully login')
        }
        else{
          toast.error('email is not varified')
          form.reset('')
        }
        navigate(from,{replace:true})
      })
      .catch((error) => {
        console.error(error)
        setError(error.message);
      })
      .finally(()=>{
        setLoading(false);
      })
    
  }
  const googleLogi =()=>{
    googleLoginPopNotification()
    .then((result) => {
      const user = result.user;
      
     console.log(user)
     toast.success('successfully login')
     navigate(from,{replace:true})
    })
    .catch((error) => {
     console.error(error.message)
     
    });
  }
  const githublogi=()=>{
    githubLoginuser()
    .then((result) => {
      const user = result.user;
      
     console.log(user)
     
      toast.success('successfully login')
      navigate(from,{replace:true})
    })
    .catch((error) => {
     console.error(error.message)
     
    });
  }
 
    return (
      <div>
        <Header></Header>
      <div className='mx-auto gap-4 m-4' style={{justifyContent:'center',alignItems:'center',marginTop:'80px',display:'flex'}}>
        <div>
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
        </div>
        <div style={{marginTop:'100px'}}>
      <ButtonGroup vertical style={{display:'block'}}>
        <div style={{borderRadius:'20px',border:'2px solid black',padding:'25px',marginBottom:'20px',backgroundColor:'yellow'}}>
        <h2 style={{color:'red'}}>Google Login</h2>
        <Button onClick={googleLogi} style={{color:'green'}} variant="outline-dark"><ImGoogle2></ImGoogle2>Login With Google</Button>
        </div>
       <div  style={{borderRadius:'20px',border:'2px solid black',padding:'25px',backgroundColor:'gray',color:'white'}}>
       <h2>Github Login</h2>
        <Button onClick={githublogi} style={{color:'white'}} variant="outline-dark"><GoMarkGithub></GoMarkGithub>Login with GitHub</Button>
       </div>
       
         
      </ButtonGroup>
  </div>
      </div>
      </div>
   
    );
};

export default Login;