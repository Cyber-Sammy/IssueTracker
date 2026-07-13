export const TaskStatuses = {
  Planning: "planning",
  ReadyToDo: "readyToDo",
  InProgress: "inProgress",
  Done: "done",
  Closed: "closed",
} as const;

export type TaskStatus =
  (typeof TaskStatuses)[keyof typeof TaskStatuses];