import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../Context/AuthProviderContext';
import Header from '../../Navbar/Header/Header';


const Profile = () => {
    const {user}=useContext(AuthContext);
    const [name,setName]=useState(user.displayName)
    const photoURLRef = useRef(user.photoURL);
  

    const handleSubmit = event =>{
        event.preventDefault();
        console.log(photoURLRef.current.value)
    }
    const handleNameChange=(event)=>{
        setName(event.target.value)
    }
    return (
      <div>
        <Header></Header>
        
        <Form  className='mx-auto w-50' style={{marginTop:'50px'}} onSubmit={handleSubmit}>
        <h1>About Profile</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>User Name</Form.Label>
        <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo url</Form.Label>
        <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="photoURL" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    );
};

export default Profile;