import './styles/IssueCard.css'

import type { IssueItem } from "../models/issue_item";

interface IssueCardProps {
    issue: IssueItem;
}

function IssueCard({ issue }: IssueCardProps) {
    return (
        <div className="issue-card">
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
            <p>Status: {issue.status}</p>
            <p>Priority: {issue.priority}</p>
            <p>Assignee: {issue.assignee}</p>
        </div>
    )
}

export default IssueCard