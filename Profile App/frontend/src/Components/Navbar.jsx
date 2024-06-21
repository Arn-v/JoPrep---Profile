import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar( ) {

    return ( 

        <nav>
            <div className='navbar'>

               <NavLink className='nav-title' to="">Acme Co</NavLink>


                <div className='nav-links'>
                  <NavLink className="nav-link" to="/">Home</NavLink>
                  <NavLink className="nav-link" to="/book">Book</NavLink>
                  <NavLink className="nav-link" to="">Guests</NavLink>
                  <NavLink className="nav-link" to="/events">Events</NavLink>
                  <NavLink className="nav-link" to="">Services</NavLink>
                  <NavLink className="nav-link" to="/support">Support</NavLink>
                  <NavLink ><div className='nav-img-container'><img className='nav-img' src=""/></div></NavLink>

                  

                </div>


            </div>
        </nav>
    );
}

export default Navbar;