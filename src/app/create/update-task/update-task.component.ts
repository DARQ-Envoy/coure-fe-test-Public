import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/utilities/data-structures';
import {
  taskAdditionGenerator,
  taskIdGenerator,
} from 'src/utilities/generators';

@Component({
  selector: 'update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent {
  @Input() task: Task | null = null;
  updateTasks(ev: Event) {
    ev.preventDefault();
    const formData = ev.currentTarget as HTMLFormElement;
    const data: Task = {
      title: formData['task-title'].value,
      description: formData['description'].value,
      priority: formData['priority'].value,
      dueDate: formData['due-date'].value,
      status: formData['status'].value,
    };
    console.log(data);
    const taskId = taskIdGenerator();
    const updatedTasks = taskAdditionGenerator(taskId, data);
  }
}
