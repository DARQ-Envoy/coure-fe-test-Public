import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  localStorageEvent = new EventEmitter<string>();
  constructor() {
    window.addEventListener('storage', (event) => {
      if (event.key === 'tasks') {
        this.localStorageEvent.emit(event.newValue?.toString()); // Emit changes
      }
    });
  }
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
    this.localStorageEvent.emit(value); // Emit changes
  }

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
    this.localStorageEvent.emit(undefined); // Emit changes
  }
}
