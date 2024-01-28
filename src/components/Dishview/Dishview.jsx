// import React from 'react';

import { useLoaderData } from "react-router-dom";
import './Dishview.css';

const Dishview = () => {
    const singledish=useLoaderData().meals[0];
     console.log(singledish)
     const {strMeal,strInstructions,strMealThumb}=singledish;
    return (
        <div>
        <div className="DishView">
            <img src={strMealThumb} alt="car!"/>
            <div className="p-10">
                <h2 className="dish-title">{strMeal}</h2>
                <p>{strInstructions}</p>
                
            </div>
        </div>
        </div>
    );
};

export default Dishview;