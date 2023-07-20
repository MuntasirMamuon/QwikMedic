import React from 'react'
import ReactDOM from 'react-dom/client'


import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AuthProvider from './Provider/AuthProvider.jsx';
import { router } from './Routes/Route.jsx';
import { Toaster } from 'react-hot-toast';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   <Toaster/>
   </AuthProvider>
  </React.StrictMode>,
)
