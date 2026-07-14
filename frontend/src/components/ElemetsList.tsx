import IssueCard from "./IssueCard";
import NoElements from "./NoElements";
import type { IssueItem } from "../models/issue_item";

import { IssueStatuses } from "../enums/issue_statuses";
import { IssuePriorities } from "../enums/issue_priorities";

import './styles/ElementsList.css'

const issuesList : IssueItem[] = [
    {id : 0, title : "Task1", description : "This is task 1", status : IssueStatuses.Planning, priority : IssuePriorities.Low, assignee : "User1"},
    {id : 1, title : "Task2", description : "This is task 2", status : IssueStatuses.Closed, priority : IssuePriorities.Medium, assignee : "User2"},
    {id : 2, title : "Task3", description : "This is task 3", status : IssueStatuses.ReadyToDo, priority : IssuePriorities.Medium, assignee : "User1"},
    {id : 3, title : "Task4", description : "This is task 4", status : IssueStatuses.Done, priority : IssuePriorities.Medium, assignee : "User1"},
    {id : 4, title : "Task5", description : "This is task 5", status : IssueStatuses.InProgress, priority : IssuePriorities.High, assignee : "User1"},
    {id : 5, title : "Task6", description : "This is task 6", status : IssueStatuses.InProgress, priority : IssuePriorities.High, assignee : "User3"},
    {id : 6, title : "Task7", description : "This is task 7", status : IssueStatuses.InProgress, priority : IssuePriorities.High, assignee : "User1"},
]

function ElementsList() {

    if (issuesList.length === 0) {
        return <NoElements />;
    }

    return (
        <div className="elements-list">
            {issuesList.map(issue => (
                <IssueCard key={issue.id} issue={issue} />
            ))}
        </div>
    )
}

export default ElementsList