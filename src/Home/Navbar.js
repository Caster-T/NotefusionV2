import React from "react"

export default function NavBar ({openPopup}) {
    return <nav className = "nav">
    <h1 className= "site-title">NoteFusion</h1>
    <div className="nav-items">
    <ul>
    <li><a href = "/">About us</a></li>
    <li><a href = "/">Canvas</a></li>
        <button onClick={openPopup} id="login">Login</button> 
    </ul>
    </div>
    </nav>
}