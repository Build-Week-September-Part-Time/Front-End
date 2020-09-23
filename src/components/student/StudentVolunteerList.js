import Axios from "axios";
import React, {useState, useEffect, useContext} from "react"; 
import VolunteerCard from "../volunteer/VolunteerCard";
import VolunteerListContext from "../../contexts/VolunteerListContext";
//import axiosWithAuth ?
import axios from "axios";
let defaultFilterBy = {
    state: "",
    availability: ""
}

function VolunteerList() {

    //  Original code without context
    let [rawVolunteers, setRawVolunteers] = useState(testVolunteers);  
    let [filteredVolunteers, setFilteredVolunteers] = useState(testVolunteers);  
     let [filterBy, setFilterBy] = useState(defaultFilterBy);
    //And then both raw and filtered were set by axios call initially
    const { volunteers } = useContext(VolunteerListContext);
    useEffect(() => {
      console.log("context volunteers", volunteers);
      setRawVolunteers(volunteers);
      setFilteredVolunteers(volunteers);
    }, [volunteers]);

  


    

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
    // useEffect(() => {

    //    axios
    //    .get("https://upgrade-tutor.herokuapp.com/dashboard/volunteers")
    //    .then((res) => {
    // console.log(res.data);
    //     setRawVolunteers(res.data);
    //     setFilteredVolunteers(res.data);
    //    })
    //    .catch((err) => {
    //        console.log("Volunteer get error");
    //    })

        


    // }, []);


    return(<>
      <h3>SEARCH FOR YOUR TUTOR</h3>
            <form onSubmit={handleSubmit}>
                <select id="state" name="state" onChange={handleChange}>
                    <option value="">Search by State</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="District Of Columbia">District Of Columbia</option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="KentuckyY">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
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
       firstname: "Test ",
       lastname: "Data",
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