// import React from 'react';

import {  useNavigate } from "react-router-dom";

const Dish = ({dish}) => {
     const {strMeal,strMealThumb,strArea}=dish;
     const navigate=useNavigate();
    const handleLink=()=>{
        navigate(`/dish/${dish.idMeal}`)
    }
    return (
        <div className="rounded overflow-hidden shadow-lg">
        <div className="relative">
   
            <img className="w-full"
                src={strMealThumb}
                alt=""></img>
            <div
                className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
            </div>
            <div
                className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                <span className="font-bold">27</span>
                <small>March</small>
            </div>
        </div>

     <div className="px-6 py-4">
        <h2 className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
            {strMeal}</h2>
        <p className="text-gray-500 text-sm">
            {strArea}
        </p>
     </div>

        <div className="px-6 py-4 flex flex-row items-center">
        <button onClick={handleLink} className="btn btn-primary">View</button> 
        </div>
      </div>
    );
};

export default Dish;