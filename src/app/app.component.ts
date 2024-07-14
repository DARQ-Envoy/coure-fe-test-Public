import { LocalStorageService } from './local-storage.service';
import { allTasksGenerator } from './../utilities/generators';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AllTasks, Task } from 'src/utilities/data-structures';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toHideEditor = true;
  taskToUpdate: Task | null = null;
  allTasks = allTasksGenerator();
  allTasksArr: Task[] = Object.values(allTasksGenerator());
  localStorageValue: Task | AllTasks = {};
  localStorageService: LocalStorageService = inject(LocalStorageService);
  constructor() {}
  ngOnInit(): void {
    this.localStorageService.valueEmitter.subscribe((value) => {
      this.allTasksArr = Object.values(allTasksGenerator());
    });
  }
  createOrUpdateTask(task: Task | null = null) {
    this.toHideEditor = false;
    this.taskToUpdate = task;
  }
  displayTaskDetails(task: Task) {}
  hideEditor(value: boolean) {
    console.log(value);
    this.toHideEditor = value;
  }
  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    this.localStorageService.valueEmitter.unsubscribe();
  }
}
