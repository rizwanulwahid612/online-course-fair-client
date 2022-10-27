import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../../Navbar/Header/Header';
import LeftSideNav from '../../Navbar/LeftsideNav/LeftSideNav';
import Home from '../../Pages/Home/Home';
import '../../../Styles.css';
import './Main.css'
import Footer from '../../Pages/Footer/Footer';


const Main = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        
        <div>
             <Header></Header>
             <Container>
    
           
            
            <Row>
            <Col lg='3'>
            <LeftSideNav></LeftSideNav>
            </Col>
            
            <Col lg='9'  className='mx-auto w-10'>
            <div className={darkMode ? "dark-mode" : "light-mode"}>
           
                    
           <div className="">
         
           
         <div className='premiam' style={{ display:'flex'}}>
        
        <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
       
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
     
      </div>
      
        </div>
        <Home></Home>
            
            <Outlet></Outlet>
        </div> 
            </Col>
            </Row>
           
         </Container>
         <Footer></Footer>
        </div>
    );
};

export default Main;