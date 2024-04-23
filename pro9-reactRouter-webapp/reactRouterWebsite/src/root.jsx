import React from 'react';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
function Root(props) {
    return (
        <div>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
}

export default Root;