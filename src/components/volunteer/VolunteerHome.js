import React, {useState} from "react"; 
import VolunteerList from "./VolunteerList";
import CurrentVolunteer from "./CurrentVolunteer";


//Requests sent to https://upgrade-tutor.herokuapp.com/
//Log in is volunteer1@gmail.com/password

function VolunteerHome() {

    
    return(
    <div>
        <p>Volunteer Home Page</p>

        <CurrentVolunteer/>


        <h3>Your tasks</h3>
       
    </div>
        
   );
}

export default VolunteerHome;

