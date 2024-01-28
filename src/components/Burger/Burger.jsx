// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Dish from "../Dish/Dish";

const Burger = () => {
    const burgers=useLoaderData().meals;
    
    return (
        <div className="grid grid-cols-3 p-12">
        {
            burgers.map(burger =><Dish
            key={burger.idMeal}
            dish={burger}
            ></Dish>)
        }
    </div>
    );
};

export default Burger;