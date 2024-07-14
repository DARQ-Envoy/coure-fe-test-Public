import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from 'src/utilities/data-structures';
import { LocalStorageService } from 'src/app/local-storage.service';

@Component({
  selector: 'update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent {
  @Input() task: Task | null = null;
  @Output() onSet: EventEmitter<boolean> = new EventEmitter();
  localStorageService: LocalStorageService = inject(LocalStorageService);
  updateTasks(ev: Event) {
    this.onSet.emit(true);
    ev.preventDefault();
    const formData = ev.currentTarget as HTMLFormElement;
    const data: Task = {
      title: formData['task-title'].value,
      description: formData['description'].value,
      priority: formData['priority'].value,
      dueDate: formData['due-date'].value,
      status: formData['status'].value,
    };

    this.localStorageService.addTask(data);
    this.cleanUpForm(formData);
  }
  cleanUpForm(form: HTMLFormElement) {
    Object.keys(form).forEach((key) => {
      form[key].value = '';
    });
  }
}
