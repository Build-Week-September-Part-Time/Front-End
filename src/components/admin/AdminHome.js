import React, {useContext} from 'react'
import styled from 'styled-components'
import CurrentUserContext from '../../contexts/CurrentUserContext'


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



    return (
        <div>
   
            <Container>
                <h1>Welcome {currentUser.firstname},</h1>
                <h2> Available Tutors</h2>
                <VolunteerList />
            </Container>
        </div>
    )
}
export default AdminHome
