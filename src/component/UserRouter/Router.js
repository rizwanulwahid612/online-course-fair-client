import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from './../Layout/Main/Main';
import Home from './../Pages/Home/Home';
import Courses from './../Pages/Courses/Courses';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import Blog from './../Pages/Blog/Blog';
import PrivateRouter from './PrivateRouter';
import CourseCard from '../Pages/Card/CourseCard/CourseCard';
import PremiamDetails from '../Pages/Card/PremiamDetails/PremiamDetails';
import Profile from './../Pages/Profile/Profile';
import Chackout from '../Pages/Card/Chackout/Chackout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';


export const router= createBrowserRouter([
    
    {path:'/',element:<Main></Main>,children:[
      
      {path:'/courses',element:<Courses></Courses>,
      loader:()=>fetch('https://server-site-rizwanulwahid612.vercel.app/categories')},
      
      {path:'/categories/:Id',element:<CourseCard></CourseCard>,
      loader:({params})=>fetch(`https://server-site-rizwanulwahid612.vercel.app/categories/${params.Id}`)
      
    },
    {path:'/checkout',element:<PrivateRouter><Chackout></Chackout></PrivateRouter>},
    {path:'/cours/:id',element:<PrivateRouter><PremiamDetails></PremiamDetails></PrivateRouter>,
     loader:({params})=>fetch(`https://server-site-rizwanulwahid612.vercel.app/cours/${params.id}`)
  }
    ]},
    {path:'/',element:<Home></Home>},
    {path:'/login',element:<Login></Login>},
    {path:'/register',element:<Registration></Registration>},
    {path:'/blog',element:<Blog></Blog>},
    {path:'/profile',element:<PrivateRouter><Profile></Profile></PrivateRouter>}
    ,{path:'*',element:<ErrorPage></ErrorPage>}
  
  ])