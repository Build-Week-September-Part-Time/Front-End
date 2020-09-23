import React from "react"; 
import styled from 'styled-components'

function VolunteerCard(props) {

    console.log("Volunteer card called");
    return(<Card>
        <h3>{props.volunteer.firstname} {props.volunteer.lastname}</h3>
        <p>Email: {props.volunteer.email}</p>
        <p>State: {props.volunteer.state}</p>
        <p>Availability: {props.volunteer.availability}</p>
    </Card>);
}

export default VolunteerCard;

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