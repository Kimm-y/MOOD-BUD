import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Login from './components/Authentication/Login.jsx'
import Form from './components/MoodEntries/Form.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing/Landing.jsx'
import Home from './pages/Home/Home.jsx'
import Articles from './pages/Articles/Articles.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import App from './App.jsx'

import Register from './components/Authentication/Register.jsx'

const urls = [
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/landing',
    element: <Landing />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/form',
    element: <Form />
  },
  {
    path: '/register',
    element: <Register/>
  },
  // {
  //   path: '/myentries',
  //   element: <Myentries />
  // },
  
  
  {
    path: '/articles',
    element: <Articles/>
  },

]

const paths = createBrowserRouter(urls)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={paths} />
  </React.StrictMode>,
)
