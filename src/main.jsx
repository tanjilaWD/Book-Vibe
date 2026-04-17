import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout.jsx'
import Homepage from './pages/homepage/Homepage';
import Books from './pages/books/Books.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <MainLayout/>,
  children: [
    {
      index: true,
      element: <Homepage/> 
    },
    {
      path: '/books',
      element: <Books/>
    }
  ]
}

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider  router={router}/>
  </StrictMode>,
)
