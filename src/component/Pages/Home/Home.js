import React, { useContext } from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../Pages/Home/Lottry/learning.json";
import web from '../../Pages/Home/Lottry/web.json'
import learn from '../../Pages/Home/Lottry/learn.json'
import { AuthContext } from '../../Context/AuthProviderContext';
import { Link } from 'react-router-dom';
const Home = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
           
            <div  style={{marginLeft:'43vw'}}>
            {
                user?.emailVerified?
                <h5 className='Texts' >Welcome: <span style={{color:'green',fontSize:'20px'}}>{user?.displayName}</span></h5>
                :
                <h5 style={{color:'red'}}>Please Verify your Email</h5>
            }
            </div>

            
            
            <div className='premiam' style={{display:'flex' ,marginTop:'0px'}}>
            <Lottie  animationData={web} loop={true} />
            <Lottie style={{}} animationData={learn} loop={true} />
            <Lottie animationData={groovyWalkAnimation} loop={true} />
            
            
            </div>
            
        </div>
    );
};

export default Home;