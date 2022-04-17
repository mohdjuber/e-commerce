import React from "react";
import Navbar from "./components/Navbar";
function Header() {
    return (
        <header>
            <div className="col"><img id="logo" src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" /></div>
            <div className="col"><Navbar /></div>
            <div className="col"><input type="text" id="search" placeholder="search"></input></div>
            <div className="col"><img id="cart" src={process.env.PUBLIC_URL + "/cart.png"} alt="cart" /></div>
            <div className="col">Login</div>
        </header>
    );
}

export default Header;