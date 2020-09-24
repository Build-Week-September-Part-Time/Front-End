import React, { useState, useContext } from "react"; 
import styled from 'styled-components'
import { TaskListContext } from "../../contexts/TaskListContext";
import TaskList from '../admin/TaskList'

function VolunteerCard(props) {
    const {tasks} = useContext(TaskListContext)
    const [showTasks, setShowTasks] = useState(false)
    const [userTasks, setUserTasks] = useState([])

    const handleTaskListClick = (e) => {
     
    }

    const showTaskList = (e) =>{
        setShowTasks(true)
    }

    return(
    <div>
        <Card>
            <h3>{props.volunteer.firstname} {props.volunteer.lastname}</h3>
            <p>Email: {props.volunteer.email}</p>
            <p>State: {props.volunteer.state}</p>
            <p>Availability: {props.volunteer.availability}</p>
            <button onClick={()=> showTaskList()}>Show Tasks</button>
            {showTasks && (
                <TaskList />
            )}
         
        </Card>
        
    </div>
    );
}

export default VolunteerCard;

const Card = styled.div`
margin: auto;
width: 300px;
border: 3px solid navy;
background: lightgrey;
padding: 20px;
text-align: center;
border-radius: 25px;
margin: 10px;

`;