import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => (
    <header>
        <ul className="flex bg-gray-200 p-4 mb-5">
            <li className="mr-6">
                <NavLink className="text-blue-500 hover:text-blue-800" activeClassName="active" exact to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="text-blue-500 hover:text-blue-800" activeClassName="active" exact to="/Wine">Wine</NavLink>
            </li>
        </ul>
    </header>
);

export default Header;
