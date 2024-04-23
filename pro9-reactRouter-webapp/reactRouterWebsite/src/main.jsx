import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './root.jsx'
import { Home ,ContactUs, User ,About, Github} from './components/index.js'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<ContactUs/>
      },
      {
        path:"user/:id",
        element:<User/>
      },
      {
        path:"github",
        element:<Github/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router }/>
  </React.StrictMode>,
)
