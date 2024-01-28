// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Dish from "../Dish/Dish";

const Burger = () => {
    const burgers=useLoaderData().meals;
    
    return (
        <div className="grid md:grid-cols-3 md:p-10 p-2">
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