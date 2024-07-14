export type Task = {
  title: string;
  description: string;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in progress' | 'completed';
};
export type AllTasks = {
  [x: number]: Task;
};
