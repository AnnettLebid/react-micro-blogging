import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className = "navbar">
             <Router>
                <Link className="home-menu" to="/">Home</Link>
                <Link className="profile-menu" to="/profile">Profile</Link>
            </Router>            
        </div>
    )
}

export default Navbar;
