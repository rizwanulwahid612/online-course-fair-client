import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Chackout from '../Chackout/Chackout';
import './PremiamDetails.css'

const PremiamDetails = () => {
    const loadeData= useLoaderData();
    
    const [checkoutDetails,setCheckoutDetails]=useState([])
  
      console.log(checkoutDetails)

    const handleCheckOut=()=>{
        console.log('click')
        const cart=loadeData;
       setCheckoutDetails(cart)
    }

    return (
        <Container style={{gap:'20px'}}>
        <div>
            <div >
            <Card className='premiam' style={{ width: '24rem' ,marginLeft:'25px', marginBottom:'30px',borderRadius:'20px' }}>
                            <Card.Img variant="top" src={loadeData.image_url} />
                            <Card.Body>
                                <Card.Title>{loadeData.title}</Card.Title>
                                <Card.Text>
                   {
                   loadeData.details.length >200 ? <p>{loadeData.details.slice(0,200)+'...'}</p>
                   :
                   <p>{loadeData.details}</p>
                   }
                </Card.Text>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div>
                    {/* <Link to='/checkout'><Button onClick={handleCheckOut} variant="primary">Check out</Button></Link> */}
                    <Button onClick={handleCheckOut} variant="primary">Check out</Button>
                    </div>
                    <div>
                    <Link to={`/categories/${loadeData.category_id}`}><Button variant="warning">Go To Back</Button></Link>
                    </div>
                </div>
                                
                              
                            </Card.Body>
                           
                        </Card>
            </div>
            
                 
                        
    </div>
    <div style={{backgroundColor:'yellow',padding:'15px'}}>
                <h1>Details</h1>
                <p>Course Name: {checkoutDetails.title}</p> 
                <p>Course Price: {checkoutDetails.price}</p>
            </div> 
    </Container>
    );
};

export default PremiamDetails;