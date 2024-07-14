import { Component, Input } from '@angular/core';
import { Task } from 'src/utilities/data-structures';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent {
  @Input() task: Task = {
    title: '',
    description: '',
    priority: 'low',
    dueDate: new Date(),
    status: 'completed',
  };
}
