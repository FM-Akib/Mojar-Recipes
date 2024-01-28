// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Dish from "../Dish/Dish";

const Fish = () => {
    const fishes=useLoaderData().meals;
   
    return (
        <div className="grid md:grid-cols-3 p-12">
            {
                fishes.map(fish =><Dish
                key={fish.idMeal}
                dish={fish}
                ></Dish>)
            }
        </div>
    );
};

export default Fish;