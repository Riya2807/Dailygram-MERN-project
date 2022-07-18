import React from 'react'
//import {Link} from 'react-router-dom'

const NavBar = ()=>{
    return(
        <nav>
        <div className="nav-wrapper white">
            <a href="/" className="brand-logo left">Dailygram</a>
            <ul id="nav-mobile" className="right">
                <li><a href="/signin">Signin</a></li>
                <li><a href="/signup">Signup</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/create">Create Post</a></li>
            </ul>
        </div>
        </nav>
    )
}

export default NavBar