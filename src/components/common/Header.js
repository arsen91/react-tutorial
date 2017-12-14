import React from 'react';
import { NavLink, IndexLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            {" | "}
            <NavLink exact to="/courses">Courses</NavLink>
            {" | "}
            <NavLink exact to="/about">About</NavLink>
        </nav>
    );
};

export default Header;