import React, {useState} from "react"; 
import VolunteerCard from "./VolunteerCard";

function VolunteerHome() {

    let [volunteers, setVolunteers] = useState(testVolunteers);
    return(
    <div>
        <p>Volunteer Home Page</p>
        {volunteers.map((volunteer, i) => {
             return <VolunteerCard volunteer={volunteer}/>
        }    
        )}
    </div>
        
   );
}

export default VolunteerHome;


let testVolunteers = [
    {
        name: "Maria Avery",
        email: "mAvery@gmail.com",
        state: "Arizona",
        availability: "Weekdays"
    },
    {
        name: "Koli Woodsmith",
        email: "KSmith@gmail.com",
        state: "Rhode Island",
        availability: "Weekends"
    },
    {
        name: "Ursula K. LeGuin",
        email: "UKLeGuin@gmail.com",
        state: "Washington",
        availability: "Everyday"
    }


];