import { LocalStorageService } from './local-storage.service';
import { allTasksGenerator } from './../utilities/generators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AllTasks, Task } from 'src/utilities/data-structures';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  toCreateOrUpdate = false;
  taskToUpdate: Task | null = null;
  allTasks = allTasksGenerator();
  allTasksArr = this.allTasks && Object.values(this.allTasks);
  localStorageValue: string = '';

  constructor(private localStorageService: LocalStorageService) {
    const index = localStorage.getItem('index');
    !index && localStorage.setItem('index', '-1');
  }

  ngOnInit(): void {
    this.localStorageService.localStorageEvent.subscribe((value) => {
      this.localStorageValue = value;
    });
  }
  createOrUpdateTask(task: Task | null = null) {
    this.toCreateOrUpdate = true;
    this.taskToUpdate = task;
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    this.localStorageService.localStorageEvent.unsubscribe();
  }
}
