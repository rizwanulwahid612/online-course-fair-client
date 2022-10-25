import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext=createContext()

const AuthProviderContext = ({children}) => {
    const [user,setUser]=useState([])
    
    //registration
    const userRegistration=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //login
    const userLogin=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    //


    const userInfo={user,userRegistration,userLogin}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviderContext;