// import React from 'react';

import { useLoaderData } from "react-router-dom";
import './Dishview.css';

const Dishview = () => {
    const singledish=useLoaderData().meals[0];
     console.log(singledish)
     const {strMeal,strInstructions,strMealThumb,strArea}=singledish;
    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div className="bg-cover bg-center text-center overflow-hidden"> 
            <img className="min-h-400px" src={strMealThumb} alt=""/>
        </div>
        <div className="max-w-3xl mx-auto">
            <div
                className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
                    <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">{strMeal}</h1>
                    <p className="text-gray-700 text-xs mt-2">Area:  {strArea}  </p>
    
                    <p className="text-base leading-8 my-5">
                        {strInstructions}
                    </p>
    
                    <h3 className="text-2xl font-bold my-5">#1. What is Food?</h3>
    
                    <p className="text-base leading-8 my-5">
                    Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our bodies need to function. The energy in food is measured in units called calories.

                    </p>
    
                    <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">“Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors—it’s how you combine them that sets you apart.” – Wolfgang Puck
                    </blockquote>
    
                    <p className="text-base leading-8 my-5">
                    Age, sex, weight, height, and level of activity determine the number of calories a person needs each day. Depending on age, sex, and activity level, the recommended daily caloric intake for a child aged 11 to 14 can range anywhere from 1,600 to 2,600 calories per day, with sedentary girls needing the fewest calories and active boys needing the most. For adults, this can range from 1,800 to about 3,000.
                    </p>

    
                </div>
    
            </div>
        </div>
    </div>


    );
};

export default Dishview;