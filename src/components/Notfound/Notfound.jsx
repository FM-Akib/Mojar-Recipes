// import React from 'react';

import { useNavigate } from 'react-router-dom';
import err from '../../assets/error.jpg';
import './Notfound.css';
const Notfound = () => {
    const navigate=useNavigate();
    const handleNavigationError = () => {
        navigate(-1);
    }
    return (
        <div className="error">
           <img src={err} alt="404"/>
           <button onClick={handleNavigationError} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-orange-400">Back</button>
        </div>
    );
};

export default Notfound;