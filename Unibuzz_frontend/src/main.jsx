import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import { StrictMode } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import Events from './components/Events/Events.jsx'
import Mentorship from './components/Mentorship/Mentorship.jsx'
import Login from './components/Login/Login.jsx'
import SignUp from './components/Signup/Signup.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='events' element={<Events />}/>
      <Route path='mentorship' element={<Mentorship />}/>
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<SignUp />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
     <RouterProvider router={router} />
 </React.StrictMode>,
)
