
import React, {useEffect, useContext} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { TaskListContext } from '../../contexts/TaskListContext'

//components
import TaskList from './TaskList'
import TaskForm from './TaskForm'


const Container = styled.div`
    margin: auto;
    width: 90%;
    border: 3px solid navy;
    padding: 20px;
    text-align: center;
    border-radius: 25px;
`


function AdminHome() {
const {getTask} = useContext(TaskListContext)

    return (
      
            <Container>
                <h1>Welcome 'Name',</h1>
                <h3>CREATE A TASK FOR YOUR VOLUNTEERS</h3>
                <TaskForm/>
                <TaskList/>
            </Container>
        
    )
}
export default AdminHome