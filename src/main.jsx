import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from './Pages/About.jsx';
import Products from './Pages/Products.jsx';
import ErrorPage from './Component/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/products/:productId",
    element: <Products/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
