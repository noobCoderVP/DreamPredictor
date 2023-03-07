import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import Clock from "react-live-clock";

function Header() {
    return (
        <header>
            <img src={logo} alt="" width="40px" />
            <h1>DreamPredictor</h1>
            <Clock
                ticking={true}
                format="HH:mm:ss"
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            />
            <NavLink to="/register">
                <button>Get started</button>
            </NavLink>
        </header>
    );
}

export default Header;
