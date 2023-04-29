export {};

declare global {
  enum Condition {
    Active = 'ACTIVE',
    Deleted = 'DELETED',
  }

  interface Todont {
    id: number;
    name: string;
    completed: boolean;
    condition: Condition;
  }
}
