import React, {useContext} from 'react'
import styled from 'styled-components'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import { Link } from "react-router-dom";


//components
import VolunteerList from '../volunteer/VolunteerList'


const Container = styled.div`
    margin: auto;
    width: 90%;
    border: 3px solid navy;
    padding: 20px;
    text-align: center;
    border-radius: 25px;
h1{
    text-transform: capitalize;
}
`

function AdminHome() {
const { currentUser } = useContext(CurrentUserContext)


const logoutToken = () => {
    localStorage.removeItem("token");
    alert('You are now Logged Out')
  };

    return (
        <div>
            <Container>
            <Link to='/'onClick={logoutToken}>Log Out</Link>
                <h1>Welcome {currentUser.firstname},</h1>
                <h2> Available Tutors</h2>
                <VolunteerList />
            </Container>
        </div>
    )
}
export default AdminHome
