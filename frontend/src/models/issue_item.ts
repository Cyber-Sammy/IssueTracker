import type { IssueStatus } from "../enums/issue_statuses";
import type { IssuePriority } from "../enums/issue_priorities";

export type IssueItem = {
  id: number;
  title: string;
  description: string;
  status: IssueStatus;
  priority: IssuePriority;
  assignee: string;
};