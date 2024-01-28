// import React from 'react';

const Dish = ({curry}) => {
     const {strMeal,strMealThumb,strArea}=curry;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
            <figure><img src={strMealThumb} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p>{strArea}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Dish;