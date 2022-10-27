import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProviderContext';
import Header from '../../Navbar/Header/Header';

const Registration = () => {
    const [error,setError]=useState('')
    const [disable,setDisable]=useState(true)

    const {userRegistration,userUpdateProfile,userVerification}=useContext(AuthContext)
    const navigate = useNavigate('')
    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const photoURL=form.photoURL.value;
        const email = form.email.value;
        const password= form.password.value;
        console.log(name,photoURL,email,password)
        if(password.length<6){
          setError('Atleast 6 charecter');
          return;
     }
 
  if (!/(?=.*[!@#$&*])/.test(password)) {
    setError('Ensure string has one special case letter')
      return;
  }
        userRegistration(email,password)
        .then((result) => {
          const user = result.user;
          console.log(user)
         

          handleEmailVarification()
          handleUpdateProfile(name,photoURL)
          form.reset('')
          setError('')
          toast.success('successfully Register')
          navigate('/login')
          
        })
        .catch((error) => {
          console.error(error)
          setError(error.message);
        });
      }
      const handleUpdateProfile=(name,photoURL)=>{
        const profile ={displayName:name,photoURL:photoURL}
        userUpdateProfile(profile)
         .then(() => {
          toast.success('profile created')
         })
         .catch(error=>console.log(error));

      }
      const handleEmailVarification=()=>{
        userVerification()
        .then(() => {
          toast.error('plz varify your email')
        });
      }
      
    
        return (
          <div>
            <Header></Header>
          
            <Form onSubmit={handleSubmit} className='mx-auto w-50' style={{marginTop:'80px'}}>
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
            <p style={{color:'red'}}>{error}</p>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">

            <Form.Check onClick={()=>setDisable(!disable)} type="checkbox" label="Are you sure to register your account?" />
              </Form.Group>
              <Form.Group className="mb-3">
        <p>Aleady have any account ? Please <Link to='/login'>Login</Link></p>
        </Form.Group>
            <Button 
            disabled={disable}
            variant="primary" type="submit">
                
              Register
            </Button>
          </Form>
          </div>
        );
    };


export default Registration;