
import React, {useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import TaskList from './TaskList'


const Container = styled.div`
    margin: auto;
    width: 90%;
    border: 3px solid navy;
    padding: 20px;
    text-align: center;
    border-radius: 25px;
`


function AdminHome() {


    return (
      
            <Container>
                <h1>Welcome 'Name',</h1>
                <h3>CREATE A TASK FOR YOUR VOLUNTEERS</h3>
                <h4>(Add form here)</h4>
                <TaskList/>
            </Container>
        
    )
}
export default AdminHome