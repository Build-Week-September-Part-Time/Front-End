import React, { useState, useContext } from "react"; 
import styled from 'styled-components'
import { TaskListContext } from "../../contexts/TaskListContext";
import TaskList from '../admin/TaskList'

function VolunteerCard(props) {
    const {tasks} = useContext(TaskListContext)
    const [showTasks, setShowTasks] = useState(false)
    const [userTasks, setUserTasks] = useState([])
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

background: #E3E3E3;
padding: 20px;
text-align: center;

margin: 10px;

`;