import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import StudentVolunteerList from "./StudentVolunteerList";
import  CurrentUserContext  from "../../contexts/CurrentUserContext";

const Container = styled.div`
    margin: auto;
    width: 90%;
    border: 3px solid navy;
    padding: 20px;
    text-align: center;
    border-radius: 25px;
`

function StudentHome() {

//  const { currentUser } = useContext(CurrentUserContext);

    return (

        <Container>
            {/* Edit to pull name from context probably */}
            <h1>Welcome!</h1>
          
            <h1>Volunteer List</h1>
            <StudentVolunteerList/>
        </Container>
    )
}

export default StudentHome;

