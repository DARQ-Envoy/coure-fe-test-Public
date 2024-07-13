import { Component, Input } from '@angular/core';
import { Task } from 'src/utilities/data-structures';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task!: Task;

  constructor() {}
}
