import React, {useContext} from 'react'
import { TaskListContext } from '../../contexts/TaskListContext'
import Task from './Task'

const TaskList = (props) => {
    //recieve 'tasks' as prop
    const {tasks} = useContext(TaskListContext)

console.log(tasks)
    return (
        <div>
        Task List
        <ul>
        {tasks.map(task =>(
            <Task 
            key={task.id}
            task={task}
            />
        ))}
        </ul>
    </div>
    )
}

export default TaskList
