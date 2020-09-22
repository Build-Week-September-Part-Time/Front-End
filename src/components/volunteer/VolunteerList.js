import React, {useState} from "react"; 
import VolunteerCard from "./VolunteerCard";

function VolunteerList() {
    //Replace with context
    let [volunteers, setVolunteers] = useState(testVolunteers);

    return(<>
        {volunteers.map((volunteer, i) => {
             return <VolunteerCard volunteer={volunteer}/>
        }    
        )}
    
    
    </>);
}

export default VolunteerList;

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