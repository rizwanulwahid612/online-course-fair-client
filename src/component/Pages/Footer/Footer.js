import React from 'react';
import { Card } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div >
             <Card className='footer' style={{backgroundColor:'black'}}>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className='App' style={{color:'white'}}>
           
            Online Courses
          </p>
          
          <footer className="blockquote-footer">
             <cite style={{color:'white'}} title="Source Title">Footer Copy-2022</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Footer;