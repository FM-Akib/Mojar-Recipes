// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Dish from "../components/Dish/Dish";


const Curry = () => {
    const curries= useLoaderData()
    // console.log(curries.meals);
    const curriesArray = curries.meals;
    return (
        <div className="grid grid-cols-3 p-12">
        {
           curriesArray.map(curry=><Dish
             key={curry.idMeal}
             curry={curry}
           ></Dish>)
        }
        </div>
    );
};

export default Curry;