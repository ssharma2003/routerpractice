import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './components/contacts/Contacts.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
    {
      path:'',
      element:<Home/>
    },
    {
      path:'about',
      element:<About/>
    },
    {
      path:'contact',
      element:<Contact/> 
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
