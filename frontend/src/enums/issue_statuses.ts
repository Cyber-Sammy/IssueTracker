export const IssueStatuses = {
  Planning: "planning",
  ReadyToDo: "readyToDo",
  InProgress: "inProgress",
  Done: "done",
  Closed: "closed",
} as const;

export type IssueStatus =
  (typeof IssueStatuses)[keyof typeof IssueStatuses];