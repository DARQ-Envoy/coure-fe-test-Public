import type { AllTasks, Task } from './data-structures';
import { LocalStorageService } from 'src/app/local-storage.service';

type taskIdGeneratorType = () => number;

export const taskIdGenerator: taskIdGeneratorType = () => {
  const previousIndex: number = JSON.parse(
    localStorage.getItem('index') as string
  );
  const newIndex = previousIndex + 1;
  localStorage.setItem('index', String(newIndex));
  return newIndex;
};
export const allTasksGenerator: () => AllTasks = () => {
  const allTasksAsString = localStorage.getItem('tasks');
  const allTasks: AllTasks = allTasksAsString
    ? JSON.parse(allTasksAsString)
    : {};
  return allTasks;
};
export const taskAdditionGenerator: (key: number, value: Task) => AllTasks = (
  key,
  value
) => {
  const allTasks = allTasksGenerator();
  const updatedTasks = allTasks
    ? { ...allTasks, [key]: value }
    : { [key]: value };
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  return updatedTasks;
};
