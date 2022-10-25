import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProviderContext';

const Courses = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            {
                user?.emailVerified?
                <h1>This is course Page</h1>
                :
                <h1>Email is not varyfied sorry to access</h1>
            }
           
        </div>
    );
};

export default Courses;