import React from 'react';
import '../styles/header.css';
import stackline_logo from '../logos/stackline_logo.svg'

const Header = () => {
    return <header>
        <img src={stackline_logo} />
    </header>
}

export default Header;