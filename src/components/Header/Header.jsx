// import React from 'react';

import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
    return (
        <nav>
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='/curry'>Curry</ActiveLink>
            <ActiveLink to='/fish'>Fish</ActiveLink>
            <ActiveLink to='/burger'>Burger</ActiveLink>
        </nav>
    );
};

export default Header;