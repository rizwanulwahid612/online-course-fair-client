import React, { useContext } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProviderContext';
import Chackout from '../Chackout/Chackout';
import './CourseCard.css'
   

const CourseCard = () => {
    const coursesByCategory=useLoaderData()
    const {user}=useContext(AuthContext)
    console.log(coursesByCategory)
   
    return (
        <div style={{ display: 'flex' }}>
          

               
               
        <Container className='premiam' style={{ display: "grid", gridTemplateColumns: 'repeat(2,1fr)',gap:'4px'}}>
            {
                coursesByCategory.map(course =>
                    <div>
                       

                        <Card style={{ width: '23rem',height:'29rem',marginBottom:'18px',borderRadius:'20px',marginLeft:'15px' }}>
                            <Card.Img style={{height:'180px'}} variant="top" src={course.image_url} />
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>
                   {
                   course.details.length >200 ? <p>{course.details.slice(0,200)+'...'}</p>
                   :
                   <p>{course.details}</p>
                   }
                </Card.Text>
            <div style={{justifyContent:'space-between',display:'flex'}}>
                <Link to={`/cours/${course._id}`}><Button variant="primary">Go To Premiam</Button></Link>
                
                <Link to={'/courses'}><Button variant="warning">Go To Back</Button></Link>
            </div>
                            </Card.Body>
                        </Card>
                    </div>
                   
                )
            }
        </Container>
      
         
         
         
        
       

           
            
            
           
    </div>
    );
};

export default CourseCard;