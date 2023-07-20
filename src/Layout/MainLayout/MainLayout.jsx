import React from 'react';
import Home from '../../Components/Home/Home/Home';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Home/Home/NavBar/Navbar';

const MainLayout = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;