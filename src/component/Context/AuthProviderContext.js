import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext=createContext()

const AuthProviderContext = ({children}) => {
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true);
    //registration
    const userRegistration=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //verify email
    const userVerification=()=>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }
    //login
    const userLogin=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //logout
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    //update userProfile
    const userUpdateProfile=(profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,profile)
    }
    //google login

    //github login
    
    //user
    useEffect(()=>{
        const unsubcribe= onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            setLoading(false)
        })
        return ()=> unsubcribe();
    },[])


    const userInfo={user,loading,setLoading,userRegistration,userLogin,userUpdateProfile,userVerification,logOut}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviderContext;