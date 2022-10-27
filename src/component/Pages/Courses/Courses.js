import React, { useContext, useEffect, useState } from 'react';
import { CardGroup, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProviderContext';
import LeftSideNav from '../../Navbar/LeftsideNav/LeftSideNav';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Courses.css'

const Courses = () => {
    const { user } = useContext(AuthContext)
    // const loader = useLoaderData();

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])



    return (
        <div>

            <div style={{ display: 'flex', marginLeft: '1vw' }}>
                <Container className='premiam' style={{ display: "grid", gridTemplateColumns: 'repeat(3,1fr)', gap: '20px', marginBottom: '38px' }}>
                    {
                        categories.map(course =>
                            <div>


                                <Card  style={{ width: '15rem', height: '22rem', borderRadius: '20px', boxShadow: '2px 3px 5px solid red' }}>
                                    <Card.Img style={{ height: '150px' }} variant="top" src={course.img} />
                                    <Card.Body>
                                        <Card.Title>{course.name}</Card.Title>
                                        <Card.Text>
                                            {
                                                course.title.length > 20 ? <p>{course.title.slice(0, 20) + '...'}</p>
                                                    :
                                                    <p>{course.title}</p>
                                            }
                                        </Card.Text>
                                        <Link to={`/categories/${course.id}`}><Button style={{ marginTop: '0px' }} variant="primary">Go To Details</Button></Link>
                                    </Card.Body>
                                </Card>
                            </div>

                        )
                    }
                </Container>
            </div>







        </div>
    );
};

export default Courses;