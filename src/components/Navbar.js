import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="display-flex navbar-container justify-content-space-between padding-x-2rem">
          <div>
            <h1>Math Magician</h1>
          </div>

          <ul className="navbar display-flex">
            <li><Link to="/" activeClassName="selected" activeStyle={{ fontWeight: "bold", color: "orange" }}>Home</Link></li>
            <li><Link to="./calculator">Calculator</Link></li>
            <li><Link to="./quote">Quote</Link></li>
         </ul>
        </div>

    );
}

export default Navbar;