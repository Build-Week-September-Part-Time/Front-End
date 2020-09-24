import React, {useState, useContext, useEffect} from "react";
import styled from "styled-components";
import axiosWithAuth from '../../utils/axiosWithAuth'
import CurrentUserContext from '../../contexts/CurrentUserContext'

const Container = styled.div`
    margin: 10px 40px 10px 10px;
	border: 3px solid white;
	padding: 20px;
	border-radius: 25px;
`;

const initialTask = {
    title: '',
    description: '',
 
}

const Task = (props) => {
  
    const [taskToEdit, setTaskToEdit] = useState(initialTask)
    const [editing, setEditing] = useState(false)


    const handleChange = (e) =>{
        setTaskToEdit ({...taskToEdit, [ e.target.name]: e.target.value })
    }

    const saveEdit = (e) => {
        e.preventDefault();

        const edit = {
            title: taskToEdit.title,
            description: taskToEdit.description,
        }

        console.log('this is what im sending to backend', edit)
        axiosWithAuth()
        .put(`/dashboard/assignTasks/${props.task.id}`, edit)
        .then(res =>{
            console.log('update change', res)
            // setUserToEdit(res.data)
            setEditing(false)
            // history.push('/home')
        })
        .catch(err => {
            console.log('wrong', err)
        })
    }


    const editTask = (t) => {
        setEditing(true)
        setTaskToEdit(props.task)
    }

	return (
		<Container>
			<span>Title: {props.task.title}</span>
			<br />
			<span>Description: {props.task.description}</span>
			<div>
				<button>DELETE</button>
				<button onClick={()=> editTask(props)}>EDIT</button>
			</div>
            {editing && (
            <form onSubmit={saveEdit}>
                <input 
                placeholder='title'
                type="text" 
                name='title' 
                value={taskToEdit.title} 
                onChange={handleChange}
                />
                <input 
                placeholder='description'
                type="text" 
                name='description' 
                value={taskToEdit.description} 
                onChange={handleChange}/>
                <button>Update</button>
            </form>
            )} 
		</Container>
	);
};

export default Task;
