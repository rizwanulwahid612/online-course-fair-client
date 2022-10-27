import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProviderContext';
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
const {user,loading}=useContext(AuthContext)
const location=useLocation()

if(loading){
    return <Spinner animation="border" />
}
if(!user){

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
}
    return children;
       
    
};

export default PrivateRouter;