 import './App.css';
// import './Styles.css'
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './component/UserRouter/Router';
import { useState } from 'react';

function App() {
  

  return (
   <div className=''>

       <RouterProvider router={router}></RouterProvider>
     <Toaster></Toaster>
  </div>
   
  );
}

export default App;
