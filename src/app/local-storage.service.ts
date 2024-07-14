import { Task, AllTasks } from 'src/utilities/data-structures';
import { EventEmitter, Injectable } from '@angular/core';
import { allTasksGenerator, taskIdGenerator } from 'src/utilities/generators';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  changedValue: string = '';
  valueEmitter: EventEmitter<AllTasks | Task> = new EventEmitter();
  allTasks: AllTasks = {};
  constructor() {
    window.addEventListener('storage', () => {
      this.valueEmitter.emit({});
    });
  }
  addTask(value: Task): void {
    const allTasks = allTasksGenerator();
    const id = taskIdGenerator();
    const updatedTasks: AllTasks = { ...allTasks, [id]: value };
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    this.valueEmitter.emit(updatedTasks);
  }
  getTask(key: number) {
    const fetchedTasks = localStorage.getItem('tasks');
    if (fetchedTasks) {
      this.allTasks = JSON.parse(fetchedTasks);
      const value = this.allTasks[key];
      this.valueEmitter.emit(value);
    }
  }
}
