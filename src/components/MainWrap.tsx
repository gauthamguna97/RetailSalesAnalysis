import React from 'react';
import '../styles/mainwrap.css';
import MainView from './Mainview';
import Sidebar from './Sidebar';

const MainWrap = () => {
    return(
        <div className='mainWrappeer'>
            <Sidebar />
            <MainView />
        </div>
    )
}

export default MainWrap;