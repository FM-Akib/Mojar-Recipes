// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Dish from "../Dish/Dish";



const Curry = () => {
    const curries= useLoaderData()
    // console.log(curries.meals);
    const curriesArray = curries.meals;
    return (
        <div className="grid md:grid-cols-3 md:p-10 p-2">
        {
           curriesArray.map(curry=><Dish
             key={curry.idMeal}
             dish={curry}
           ></Dish>)
        }
        </div>
    );
};

export default Curry;