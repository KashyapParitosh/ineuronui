import React from 'react'
import './nav.scss'
import LogoOfNav from '../../gallery/logo-ineunon.png'

function Nav () {
    return(
        <div className="navbar-box">
        <div className="logo-box">
        <img src={LogoOfNav} alt="logo-ineunon"></img>
        </div>

        <div className="signup-login">
            <span>Are you hiring?</span>
            <span><b>Login</b></span>
            <span><button className="btn">Sign up</button></span>
        </div>
    </div>
    )
}

export default Nav;