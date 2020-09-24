
import React, {useState, useEffect} from "react"; 
import VolunteerCard from "./VolunteerCard";
//import axiosWithAuth ?
import axios from "axios";


function VolunteerList() {

    //Replace with context
    let [volunteers, setVolunteers] = useState(testVolunteers);

    //Fetch volunteers
    //Question, do I add volunteers to context here? Or somewhere else and then useContext here?
    useEffect(() => {

       axios
       .get("https://upgrade-tutor.herokuapp.com/dashboard/volunteers")
       .then((res) => {
    console.log(res.data);
        setVolunteers(res.data);
       })
       .catch((err) => {
           console.log("Volunteer get error");
       })


    }, []);


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