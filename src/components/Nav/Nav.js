import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div>
        <ul>
            <li><NavLink>
                 home</NavLink>
            </li>

            <li><NavLink>
                Login</NavLink>
            </li>

            <li><NavLink>
                Blogposts</NavLink>
            </li>

            <li><NavLink>
                home</NavLink>
            </li>

        </ul>
        </div>
    );
};

export default Nav;