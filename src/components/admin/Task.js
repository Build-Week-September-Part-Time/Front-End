import React, {useState, useContext} from "react";
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
    const { currentUser } = useContext(CurrentUserContext)
    const [editing, setEditing] = useState(false)
    console.log('current user from task',currentUser)

    const handleChange = (e) =>{
        setTaskToEdit ({...taskToEdit, [ e.target.name]: e.target.value })
    }

    const saveEdit = (e) => {
        const edit = {
            title: taskToEdit.title,
            description: taskToEdit.description,
        }
        e.preventDefault()
        console.log('look here', edit)
        axiosWithAuth()
        .put(`/dashboard/assignTasks/${currentUser.id}`, edit)
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


    const editTask = (task) => {
        setEditing(true)
        setTaskToEdit(task)
    }

	return (
		<Container>
			<span>Title: {props.task.title}</span>
			<br />
			<span>Description: {props.task.description}</span>
			<div>
				<button>DELETE</button>
				<button onClick={()=> editTask()}>EDIT</button>
			</div>
            {editing && (
            <form onSubmit={saveEdit}>
                <input placeholder='title'type="text" name='title' value={props.task.title} onChange={handleChange}/>
                <input placeholder='description'type="text" name='description' value={props.task.description} onChange={handleChange}/>
                <button>Update</button>
            </form>
            )} 
		</Container>
	);
};

export default Task;
