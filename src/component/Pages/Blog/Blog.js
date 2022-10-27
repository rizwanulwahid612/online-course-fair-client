import React, { useState } from 'react';
import { Button, Fade } from 'react-bootstrap';
import Header from '../../Navbar/Header/Header';

const Blog = () => {
    const [open, setOpen] = useState(false);
    return (
        
        <div>

    
            <Header></Header>
            <div className style={{marginTop:'10px',marginLeft:'100px',marginRight:'10px'}}>
          <h1>This is Block Page</h1>
          <br />
            <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        What is cors?
      </Button>
      <Fade in={open}>
        <div id="example-fade-text" style={{marginLeft:'100px',marginRight:'10px'}}>
        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
        If implemented badly, CORS can lead to major security risk like leaking of API keys, other users data or even much more. A very great example of security risk of CORS misconfiguration is this
        </div>
      </Fade>
            
        </div>
        <div  className style={{marginTop:'10px',marginLeft:'100px',marginRight:'10px'}}>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text3"
        aria-expanded={open}
      >
        Why are you using firebase?What other options  do you have to implement authentication?
      </Button>
      <Fade in={open}>
        <div id="example-fade-text3" style={{marginLeft:'100px',marginRight:'10px'}}>
        Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.
        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
        Biometric Authentication Methods. 
        </div>
      </Fade>
        </div>
        <div  className style={{marginTop:'10px',marginLeft:'100px',marginRight:'10px'}}>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text3"
        aria-expanded={open}
      >
        How does the private Route work?
      </Button>
      <Fade in={open}>
        <div id="example-fade-text3" style={{marginLeft:'100px',marginRight:'10px'}}>
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated
        The private route component is used to protect selected pages in a React app from unauthenticated users.
        </div>
      </Fade>
        </div>
        <div  className style={{marginTop:'10px',marginLeft:'100px',marginRight:'10px'}}>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text3"
        aria-expanded={open}
      >
        What is Node? How does node work?
      </Button>
      <Fade in={open}>
        <div id="example-fade-text3" style={{marginLeft:'100px',marginRight:'10px'}}>
        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
        </div>
      </Fade>
        </div>
        </div>
    );
};

export default Blog;