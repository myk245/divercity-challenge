import React from 'react'

function NavBar() {
   return (
      <div className="navbar">
         <a href="/">
            <img className="logo" alt="Divercity Logo" src="Divercity-Logo.png"></img>
         </a>
         <a href="/">Home</a>
         <a href="/jobs">Jobs</a>
         <a href="#about">Log In</a>
      </div>
   )
}

export default NavBar