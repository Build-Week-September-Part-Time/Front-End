import React, { useState } from "react"; 
import styled from 'styled-components'
import TaskList from '../admin/TaskList'
import TaskForm from '../admin/TaskForm'


function VolunteerCard(props) {
    const [showTasks, setShowTasks] = useState(false)
    const [form,setForm] = useState(false)

    const showTaskList = (e) =>{
        setShowTasks(true)
    }

    const showForm = (e) =>{
        setForm(true)
    }

    return(
    <div>
        <Card>
            <h3>{props.volunteer.firstname} {props.volunteer.lastname}</h3>
            <p>Email: {props.volunteer.email}</p>
            <p>State: {props.volunteer.state}</p>
            <p>Availability: {props.volunteer.availability}</p>
            <button onClick={()=> showForm()}>Add New Task</button>
            <br/>
            {form && (
                <TaskForm/>
            )
            }
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