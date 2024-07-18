import React from "react";
import logo from "./logo.png";
import logo1 from "./logo1.png";

export default function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo" />
            <img className="logo" src={logo1} alt="logo" />
        </div>
    );
}