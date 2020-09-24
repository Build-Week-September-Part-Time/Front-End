import React, {useState, useContext, useEffect} from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";


const initialFormData = {
    firstname: "First Name",
    lastname: "Last Name",
    email: "Email",
    state: "State",
    availability: "Availability"

}

function UpdateVolunteer() {
    
    const [formData, setFormData] = useState(initialFormData);
    const { currentUser } = useContext(CurrentUserContext);
    let history = useHistory();

    useEffect(() => {
        setFormData(currentUser);
       //  console.log("currentVolunteer", currentVolunteer);
       }, [currentUser]);
    


    function changeHandler(e) {
        e.persist();
        console.log("change handler");
        console.log("e", e);
        console.log("form data before", formData);
    
        setFormData({...formData, [e.target.name]: e.target.value});
        console.log("form data after", formData);

    };


    function handleSubmit(e) {
        e.preventDefault();
        console.log("pulledUser", currentUser);
        console.log("formData", formData);

        axiosWithAuth()
        .put('/dashboard/volunteers/${currentUser.id}', formData)
        .then(() => {
            history.push("/volunteer-home");
        }
            
        )
        .catch((err) => {
            console.log(err);
        })


    };


    return(
        <div>
            <h3>Update Information</h3>
            <form onSubmit={handleSubmit} className="update-form">
               <label>
                   {/* First Name  */}
                   <input
                    type="text"
                    name="firstname"
                    onChange={changeHandler}
                    value={formData.firstname}
                    />
               </label>
               <br/>
               <label>
                   {/* Last Name   */}
                   <input
                    type="text"
                    name="lastname"
                    onChange={changeHandler}
                    value={formData.lastname}
                    />
               </label>
               <br/>
               <label>
                   {/* Email   */}
                   <input
                    type="text"
                    name="email"
                    onChange={changeHandler}
                    value={formData.email}
                    />
               </label>
               <br/>
               <select id="state" name="state" onChange={changeHandler}>
                    <option value="">{formData.state}</option>
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
                <select id="availability" name="availability" onChange={changeHandler}>
                    <option value="">{formData.availability}</option>
                    <option value="every day">Every day</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                </select>
               <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateVolunteer;