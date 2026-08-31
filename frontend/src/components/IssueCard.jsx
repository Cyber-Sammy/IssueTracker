import './styles/IssueCard.css'

function IssueCard({ issue, isSelected, selectIssueCallback }) {
    return (
        <div onClick={() => selectIssueCallback?.(issue.id)} 
             className={`issue-card ${isSelected ? 'selected' : ''}`}>
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
            <p>Status: {issue.status}</p>
            <p>Priority: {issue.priority}</p>
            <p>Assignee: {issue.assignee}</p>
        </div>
    )
}

export default IssueCard
