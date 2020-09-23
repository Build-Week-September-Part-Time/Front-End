import React, {useContext, useState, useEffect} from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function CurrentVolunteer(props) {

  
    const [currentVolunteer, setCurrentVolunteer] = useState(testVolunteer);
    const { currentUser } = useContext(CurrentUserContext);
  
    useEffect(() => {
       setCurrentVolunteer(currentUser);
       console.log("currentVolunteer", currentVolunteer);
      }, [currentUser]);
   
 
    


    return (
    <div>
        {/* Can't use card here for some reason */}
        <h3>Your Information:</h3>
        {/* Causes infinite loading */}
        <p>{currentVolunteer.firstname}</p>
        {/* {currentUser != {} && <VolunteerCard volunteer={currentUser}/>
        } */}

        
    </div>);
};


export default CurrentVolunteer;

const testVolunteer =  {
    firstname: "Test ",
    lastname: "Data",
     email: "mAvery@gmail.com",
     state: "Arizona",
     availability: "Weekdays"
 };