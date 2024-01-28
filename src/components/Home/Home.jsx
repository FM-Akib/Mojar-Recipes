// import React from 'react';

import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import'./Home.css';
const Home = () => {
    const navigation =useNavigation();
    return (
        <div>
           <Header/>
           <div className="flex items-center justify-center">
            {
                navigation.state==='loading'?<span className="loading loading-dots loading-lg loaderHeight"></span>:''
            }
           </div>
           <Outlet/>
        </div>
    );
};

export default Home;