import React, {useContext, useState} from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import VolunteerCard from "./VolunteerHome";

function CurrentVolunteer(props) {

  
    const { currentUser } = useContext(CurrentUserContext);
    // console.log(currentUser);
   

   
 
    


    return (
    <div>
        <h3>Your Information</h3>
    </div>);
};


export default CurrentVolunteer;