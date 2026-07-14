import IssueCard from "./IssueCard";
import NoElements from "./NoElements";
import type { IssueItem } from "../models/issue_item";

import './styles/IssuesList.css'

interface IssuesListProps {
    issues: IssueItem[];
}

function ElementsList({ issues }: IssuesListProps) {

    if (issues.length === 0) {
        return <NoElements />;
    }

    return (
        <div className="elements-list">
            {issues.map(issue => (
                <IssueCard key={issue.id} issue={issue} />
            ))}
        </div>
    )
}

export default ElementsList