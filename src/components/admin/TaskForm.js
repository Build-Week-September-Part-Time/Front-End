import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import axiosWithAuth from '../../utils/axiosWithAuth'
import CurrentUserContext from "../../contexts/CurrentUserContext";


const Container = styled.div`
    margin: 20px auto;
    width: 90%;
    border: 3px solid white;
    padding: 20px;
    text-align: center;
    border-radius: 25px;
`

const initialState = {
    title: '',
    description: '',
    volunteer_email:'',
}

const TaskForm = () => {
    const {currentUser} = useContext(CurrentUserContext)
    console.log('currentUser',currentUser)
    const [form, setForm] = useState(initialState)

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        const newTodo ={
            title: form.title.trim(),
            description: form.description.trim(),
            volunteer_email: form.volunteer_email
        }
        console.log('sending this', newTodo)
        axiosWithAuth()
        .post('https://upgrade-tutor.herokuapp.com/dashboard/assignTasks', newTodo)
        .then(res =>{
            console.log('yayyy oh yeah', res)
        })
        .catch(err =>{
            console.log(err)
        })

        setForm(initialState)
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Add New Task</label>
                <br/>
                <input 
                type="text"
                name='title'
                placeholder='Title'
                onChange={handleChange}
                value={form.title}
                />
                <br/>
                <input 
                type="text"
                name="description"
                placeholder='Desricption'
                onChange={handleChange}
                value={form.description}
                />
               <br/>
               <input 
                type="text"
                name="volunteer_email"
                placeholder='Email'
                onChange={handleChange}
                value={form.email}
                />
               <br/>
                <button>Add Task</button>
            </form>
           
        </Container>
    )
}

export default TaskForm
