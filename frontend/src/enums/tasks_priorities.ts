export const TaskPriorities = {
  Low: "low",
  Medium: "medium",
  High: "high",
} as const;

export type TaskPriority =
  (typeof TaskPriorities)[keyof typeof TaskPriorities];