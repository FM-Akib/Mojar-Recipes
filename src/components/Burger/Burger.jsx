// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Dish from "../Dish/Dish";

const Burger = () => {
    const burgers=useLoaderData().meals;
    
    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">

        {
            burgers.map(burger =><Dish
            key={burger.idMeal}
            dish={burger}
            ></Dish>)
        }

        </div>
        </div>    
    
    );
};

export default Burger;