import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import './assets/components/router/Router.jsx'
import Home from './assets/components/screens/home/Home.jsx'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CatDetail from './assets/components/screens/cat-detail/CatDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <div>Not found</div>,
  },
  {
    path: '/car/:id',
    element: <CatDetail/>,
    errorElement: <div>Not found</div>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
