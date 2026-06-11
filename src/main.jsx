import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Aboutus from './Components/Aboutus.jsx'
import Contact from './Components/Contact.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import Product from './Components/Product.jsx'
import PageNotFound from './Components/PageNotFound.jsx'
import Registration from './Components/Registration.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <Aboutus/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path:"/Product/:id",
        element: <Product/>
      },
      {
        errorElement: <PageNotFound/>
      },
      {
        path:"/Registration",
        element: <Registration/>
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
