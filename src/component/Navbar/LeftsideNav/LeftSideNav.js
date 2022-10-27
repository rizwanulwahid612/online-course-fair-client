import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProviderContext';
import './LeftSideNav.css'

const LeftSideNav = () => {
    const {}=useContext(AuthContext)
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        
      fetch('https://server-site-rizwanulwahid612.vercel.app/categories')
      .then(res=>res.json())
      .then(data=>setCategories(data))
      .catch(error=>console.log(error))
    },[])
    return (
        <div style={{backgroundColor:'black',marginTop:'50px',color:'white',padding:'20px'}}>
            <div>
            <h1 className='text1'>Course Fair</h1>
            </div>
            
        <div className='premiam' style={{justifyContent:'center',marginTop:'50px'}}>
           {
                categories.map(category=><ul><Link to={`/categories/${category.id}`}>{category.name}</Link></ul>)
            }
        </div>
           
            
        </div>
    );
};

export default LeftSideNav;