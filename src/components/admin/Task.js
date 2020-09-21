import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 20px auto;
    width: 90%;
    border: 3px solid blue;
    padding: 20px;
    text-align: center;
    border-radius: 25px;
`

const Task = (props) => {
    return (
        <Container>
         
               <span>Title: {props.task.title}</span>
               <br/>
               <span>Description: {props.task.description}</span>
                <div>
                    <button>DELETE</button>
                    <button>EDIT</button>
                </div>

        </Container>
    )
}

export default Task
