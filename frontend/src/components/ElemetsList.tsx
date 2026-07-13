import { TaskStatuses } from "../enums/task_statuses";
import { TaskPriorities } from "../enums/tasks_priorities";

import './styles/ElementsList.css'


const tasksList = [
    {id : 0, title : "Task1", description : "This is task 1", status : TaskStatuses.Planning, priority : TaskPriorities.Low, assignee : "User1"},
    {id : 1, title : "Task2", description : "This is task 2", status : TaskStatuses.Closed, priority : TaskPriorities.Medium, assignee : "User2"},
    {id : 2, title : "Task3", description : "This is task 3", status : TaskStatuses.ReadyToDo, priority : TaskPriorities.Medium, assignee : "User1"},
    {id : 3, title : "Task4", description : "This is task 4", status : TaskStatuses.Done, priority : TaskPriorities.Medium, assignee : "User1"},
    {id : 4, title : "Task5", description : "This is task 5", status : TaskStatuses.InProgress, priority : TaskPriorities.High, assignee : "User1"},
    {id : 5, title : "Task6", description : "This is task 6", status : TaskStatuses.InProgress, priority : TaskPriorities.High, assignee : "User3"},
    {id : 6, title : "Task7", description : "This is task 7", status : TaskStatuses.InProgress, priority : TaskPriorities.High, assignee : "User1"},
]

function ElementsList() {
    return (
        <div className="elements-list">
            {tasksList.map(task => (
                <div key={task.id} className="element-item">
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <text>Status: {task.status}</text>
                    <br></br>
                    <text>Priority: {task.priority}</text>
                    <p>Assignee: {task.assignee}</p>
                </div>
            ))}
        </div>
    )
}

export default ElementsList