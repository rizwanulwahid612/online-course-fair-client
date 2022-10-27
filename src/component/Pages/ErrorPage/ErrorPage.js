import React from 'react';
import Header from '../../Navbar/Header/Header';

const ErrorPage = () => {
    return (
       
        <div>
             <Header></Header>
             <div style={{marginTop:'100px'}} className='App'>
             <div>
             <h1>This page is not found. please go back to home.</h1>
             <h3>Please write the currect url</h3>
              <h4>Error Page </h4>
             </div>
             
              <div>
              <h2>404</h2>
              </div>
               
        
            </div>
        </div>
    );
};

export default ErrorPage;