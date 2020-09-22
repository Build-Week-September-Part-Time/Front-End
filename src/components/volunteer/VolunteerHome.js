import React, {useState} from "react"; 
import VolunteerList from "./VolunteerList";

//Requests sent to https://upgrade-tutor.herokuapp.com/
//Log in is volunteer1@gmail.com/password

function VolunteerHome() {

    
    return(
    <div>
        <p>Volunteer Home Page</p>

        <h3>Volunteer List:</h3>
        <p> Here temporarily, will be moved to student homepage</p>
        <VolunteerList />
    </div>
        
   );
}

export default VolunteerHome;

