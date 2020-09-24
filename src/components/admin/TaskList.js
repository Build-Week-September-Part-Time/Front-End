import React, {useContext} from 'react'
import { TaskListContext } from '../../contexts/TaskListContext'
import Task from './Task'


const TaskList = () => {
    //recieve 'tasks' as prop
    const {tasks} = useContext(TaskListContext)

    return (
        <div>
        <h2>Task List</h2>
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
