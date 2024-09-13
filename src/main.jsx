import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Mainlayout from "./Mainlayout.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home,About,Publications,PublicationSingle,Contact} from './pages'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout/>,
    // errorElement:<Errorpage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },

      {
        path: '/publications',
        element: <Publications/>
      },
      {
        path: '/publications/:PID',
        element: <PublicationSingle/>
      },

      {
        path: '/contact',
        element: <Contact/>
      },




    ],

  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

      <Mainlayout/>

    </RouterProvider>

  </StrictMode>,
)
