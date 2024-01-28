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
import Dishview from './components/Dishview/Dishview.jsx';


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
        element:<Fish/>,
        loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Fish')
      },
      {
        path: "burger",
        element:<Burger/>,
        loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Burger')
      },
      {
         path:"dish/:dishId",
         element:<Dishview/>,
         loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.dishId}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
