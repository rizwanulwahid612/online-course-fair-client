import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../../Navbar/Header/Header';
import LeftSideNav from './../../Navbar/LeftsideNav/LeftSideNav';

const Main = () => {
    return (
        <div>
            <div>
            <Header></Header>
            </div>
           
         <Container>
            <Row>
            <Col lg='2'>
            <LeftSideNav></LeftSideNav>
            </Col>

            <Col lg='10'  className='mx-auto w-10'>
            <Outlet></Outlet>
            </Col>
            </Row>
           
         </Container>
        </div>
    );
};

export default Main;