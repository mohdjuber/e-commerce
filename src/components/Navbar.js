import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav>
            <li>
                <Link to="/">top Wear</Link>
            </li>
            <li>
                <Link to="/bottomwear">bottom wear</Link>
            </li>
            <li>
                <Link to="/cosmetics">cosmetics</Link>
            </li>
            <li>
                <Link to="/footwear">footwear</Link>
            </li>
        </nav>
    );
}
export default Navbar;