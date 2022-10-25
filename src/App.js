import './App.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Main from './component/Layout/Main/Main';
import Home from './component/Pages/Home/Home';
import Courses from './component/Pages/Courses/Courses';
import Login from './component/Pages/Login/Login';
import Registration from './component/Pages/Registration/Registration';
import Blog from './component/Pages/Blog/Blog';

function App() {
  const router= createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
      {path:'/',element:<Home></Home>},
      {path:'/courses',element:<Courses></Courses>},
      {path:'/login',element:<Login></Login>},
      {path:'/register',element:<Registration></Registration>},
      {path:'/blog',element:<Blog></Blog>}
    ]}
  
  ])
  return (
    <div className="">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
