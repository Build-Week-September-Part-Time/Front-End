import Axios from "axios";
import React, {useState, useEffect} from "react"; 
import VolunteerCard from "../volunteer/VolunteerCard";
//import axiosWithAuth ?
import axios from "axios";
let defaultFilterBy = {
    state: "",
    availability: ""
}
function VolunteerList() {
    //Replace with context
    let [rawVolunteers, setRawVolunteers] = useState(testVolunteers);
    let [filteredVolunteers, setFilteredVolunteers] = useState(testVolunteers);
    let [filterBy, setFilterBy] = useState(defaultFilterBy);
    
    // console.log("raw", rawVolunteers);
    // console.log("Filtered", filteredVolunteers);

    function filterVolunteers() {
        console.log("Filter called");
        setFilteredVolunteers(rawVolunteers);

         //Narrow down based on state
         if(filterBy.state != "") {
            console.log("filtering");
            console.log("Filter by", filterBy);
            let tempFiltered = filteredVolunteers.filter((volunteer) => {
                console.log(volunteer.state);
                return volunteer.state.toLowerCase().includes(filterBy.state.toLowerCase());
            } 
            );
            setFilteredVolunteers(tempFiltered);
        }

         //Narrow down based on availability
         if(filterBy.availability != "") {
            console.log("filtering");
            console.log("Filter by", filterBy);
            let tempFiltered = filteredVolunteers.filter((volunteer) => {
                console.log(volunteer.availability);
                return volunteer.availability.toLowerCase().includes(filterBy.availability.toLowerCase());
            } 
            );
            setFilteredVolunteers(tempFiltered);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Submitted");
        // console.log(filterBy);
        filterVolunteers();
    };

    const handleChange = e => {
        setFilterBy({
            ...filterBy, [e.target.name]: e.target.value
        })
       

       
    }
    //Fetch volunteers
    //Question, do I add volunteers to context here? Or somewhere else and then useContext here?
    useEffect(() => {

       axios
       .get("https://upgrade-tutor.herokuapp.com/dashboard/volunteers")
       .then((res) => {
    console.log(res.data);
        setRawVolunteers(res.data);
        setFilteredVolunteers(res.data);
       })
       .catch((err) => {
           console.log("Volunteer get error");
       })


    }, []);


    return(<>
      <h3>SEARCH FOR YOUR TUTOR</h3>
            <form onSubmit={handleSubmit}>
                <select id="state" name="state" onChange={handleChange}>
                    <option value="">Search by State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>	
                <br/>
                <select id="availability" name="availability" onChange={handleChange}>
                    <option value="">Search by Availability</option>
                    <option value="every day">Every day</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                </select>	
                <button>Submit</button>
            </form>
        {filteredVolunteers.map((volunteer, i) => {
             return <VolunteerCard volunteer={volunteer}/>
        }    
        )}
    
    
    </>);
}

export default VolunteerList;

let testVolunteers = [
    {
       
        email: "mAvery@gmail.com",
        state: "Arizona",
        availability: "Weekdays"
    },
    {
        firstname: "Koli",
        lastname: "Woodsmight",
        email: "KSmith@gmail.com",
        state: "Rhode Island",
        availability: "Weekends"
    },
    {
        firstname: "Ursula K.",
        lastname: "LeGuin",
        email: "UKLeGuin@gmail.com",
        state: "Washington",
        availability: "Every day"
    }


];