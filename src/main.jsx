import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Curry from './Curry/Curry.jsx';
import Fish from './components/Fish/Fish.jsx';
import Burger from './components/Burger/Burger.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path: "curry",
        element:<Curry/>,
        loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Curry')
      },
      {
        path: "fish",
        element:<Fish/>
      },
      {
        path: "burger",
        element:<Burger/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
