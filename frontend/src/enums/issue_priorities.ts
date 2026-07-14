export const IssuePriorities = {
  Low: "low",
  Medium: "medium",
  High: "high",
} as const;

export type IssuePriority =
  (typeof IssuePriorities)[keyof typeof IssuePriorities];