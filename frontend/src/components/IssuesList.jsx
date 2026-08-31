import IssueCard from "./IssueCard";
import NoElements from "./NoElements";

import './styles/IssuesList.css'

function IssuesList({ issues, selectedIssueId, selectIssueCallback }) {

    if (issues.length === 0) {
        return <NoElements />;
    }

    return (
        <div className="elements-list">
            {issues.map(issue => (
                <IssueCard key={issue.id} issue={issue} isSelected={issue.id === selectedIssueId} selectIssueCallback={selectIssueCallback} />
            ))}
        </div>
    )
}

export default IssuesList
