import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePost from './components/CreatPost.jsx'
import PostListData from './components/PostListData.jsx'
import Fetching from './components/Fetching.jsx'

  
   const router = createBrowserRouter([

    {  path:"/" , element:<App/> ,
       
        children: [
          { path:"/" , element:<PostListData></PostListData>},
        { path:"/Creat-Post" , element: <CreatePost></CreatePost>},
        { path:"/Fetch" , element: <Fetching ></Fetching> },
      ]
     }
   ])

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
