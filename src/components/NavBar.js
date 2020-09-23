import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <NavLink to="/login">Login</NavLink>
            <br/>   
            <NavLink to="/signup">Signup</NavLink>
            <br/>
             {/* To be made PrivateRoute - will remove after forms are created*/}
            <NavLink to="/student-home">Student Dashboard</NavLink>
            <br/> 
            {/* To be made PrivateRoute - will remove after forms are created*/}
            <NavLink to="/admin-home">Admin Dashboard</NavLink>
            <br/> 
            {/* To be made PrivateRoute - will remove after forms are created*/}
            <NavLink to="/volunteer-home">Volunteer Dashboard</NavLink>
            {/* <br/> 
            <NavLink to="/">Home</NavLink> */}
            <br/>
            <a href="https://upgradetutors.netlify.app/">Home</a>
        </div>
    )
}
