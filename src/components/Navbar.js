import React  from 'react'

const NavBar = ()=>{
    const renderList = ()=>{
        if(localStorage.getItem("jwt")){
            return [
                <li><a href="/profile">Profile</a></li>,
                <li><a href="/create">Create Post</a></li>,
                <li>
                    <button className="btn waves-effect waves-light #ea80fc purple darken-1"
                onClick={()=>{
                    localStorage.clear()
                    window.location.href="http://localhost:3000/signin"
                }}
                >
                    Logout   
                </button>
                </li>
            ]
        }
        else{
            return [
                <li><a href="/signin">Signin</a></li>,
                <li><a href="/signup">Signup</a></li>
            ]
        }
    }
    return(
        <nav>
        <div className="nav-wrapper white">
            <a href="/" className="brand-logo left">Dailygram</a>
            <ul id="nav-mobile" className="right">
                {renderList()}
            </ul>
        </div>
        </nav>
    )
}
export default NavBar
