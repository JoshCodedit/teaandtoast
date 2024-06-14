import React from "react"

function Header(){
    return(

        <div className="header">
            <img className="logo" src="./T&T_Logo.png" alt="Website Logo" />

            
            <nav className="navbar">
                <ul>
                    <li><a class="active" href="#">Home</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Video Reviews</a></li>
                    <li><a href="#">Submit Your Music</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <nav className="navbar-dropdown">
        <select>
          <option value="#">Home</option>
          <option value="#">Reviews</option>
          <option value="#">Video Reviews</option>
          <option value="#">Submit Your Music</option>
          <option value="#">About Us</option>
          <option value="#">Contact Us</option>
        </select>
      </nav>
        </div>
    )
}

export default Header