// import React from 'react';

import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import'./Home.css';
import bgi from '../../assets/bg.png'
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
           <div className="bg-cover bg-center" >
            <img src={bgi} alt=""/>
           </div>

          



        </div>
    );
};

export default Home;