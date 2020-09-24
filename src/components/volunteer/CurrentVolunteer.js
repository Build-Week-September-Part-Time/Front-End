import React, {useContext, useState, useEffect} from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import styled from 'styled-components';
import axiosWithAuth from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";


function CurrentVolunteer(props) {

  
    const [currentVolunteer, setCurrentVolunteer] = useState(testVolunteer);
    const { currentUser } = useContext(CurrentUserContext);
    let history = useHistory();
    useEffect(() => {
       setCurrentVolunteer(currentUser);
      //  console.log("currentVolunteer", currentVolunteer);
      }, [currentUser]);
   
     
      

      function handleDelete(e) {
        e.preventDefault();
        // console.log("volunteer id", currentVolunteer.id);
        axiosWithAuth()
          .delete(`/dashboard/volunteers/${currentVolunteer.id}`)
          .then((res) => {
            history.push("/login");
            // console.log("delete redirect", props.history);
          })
          .catch((err) => console.log(err));
    
      }


    return (
    <div>
        {/* Can't use card here for some reason */}
        <h3>Your Information:</h3>
        {/* Causes infinite loading */}
        <Card>
            <h3>{currentVolunteer.firstname}{" "}{currentVolunteer.lastname}</h3>
            <p>Email: {currentVolunteer.email}</p>
            <p>State: {currentVolunteer.state}</p>
            <p>Availability: {currentVolunteer.availability}</p>
        </Card>
        <button onClick={handleDelete}>Delete</button>
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
     availability: "Weekdays",
     id: 50
 };

 const Card = styled.div`
margin: auto;c
width: 300px;
border: 3px solid navy;
background: lightgrey;
padding: 20px;
text-align: center;
border-radius: 25px;
margin: 10px;

`;