import React, {useContext, useState} from 'react'
import axiosWithAuth from "../../utils/axiosWithAuth"

import styled from 'styled-components'
import { TaskListContext } from '../../contexts/TaskListContext'

const Container = styled.div`
    margin: 20px auto;
    width: 40%;
    border: 3px solid grey;
    padding: 20px;
    text-align: center;
    border-radius: 25px;
`

const initialState = {
    title: '',
    description: '',
}

const TaskForm = () => {
    const {addTask,tasks} = useContext(TaskListContext)
    const [form, setForm] = useState(initialState)

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    // const handleSubmit = (e) =>{
    //     e.preventDefault()
    //     addTask(title)
    //     setTitle('')
    // }

    const postNewTask = task =>{
        axiosWithAuth()
        .post("https://upgrade-tutor.herokuapp.com/dashboard/assignTasks")
    }

    return (
        <Container>
            <form >
                <label htmlFor="">Add New Task</label>
                <br/>
                <input 
                type="text"
                name='title'
                placeholder='Title'
                // onChange={handleChange}
                />
                <br/>
                <input 
                type="text"
                name="description"
                placeholder='Desricption'
                // onChange={handleChange}
                />
            </form>
            <div>
                <button>Add Task</button>
            </div>
        </Container>
    )
}

export default TaskForm
