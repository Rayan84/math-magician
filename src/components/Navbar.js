import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="./calculator">Calculator</Link></li>
        <li><Link to="./quote">Quote</Link></li>
      </ul>
    );
}

export default Navbar;