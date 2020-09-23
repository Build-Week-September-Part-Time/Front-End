import React, {useEffect, useContext} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import CurrentUserContext from '../../contexts/CurrentUserContext'


//components
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import VolunteerList from '../volunteer/VolunteerList'
import { NavLink } from 'react-router-dom'


const Container = styled.div`
    margin: auto;
    width: 90%;
    border: 3px solid navy;
    padding: 20px;
    text-align: center;
    border-radius: 25px;
`


function AdminHome() {

const { currentUser } = useContext(CurrentUserContext)
console.log(currentUser)
    return (
       
            <Container>
                <h1>Welcome {currentUser.firstname},</h1>
                <h2> Check out all of the tuturs:</h2>
                <VolunteerList/>
            </Container>
        
    )
}
export default AdminHome
