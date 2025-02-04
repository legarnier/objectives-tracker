import { Injectable } from '@angular/core';
import { Objective } from '../models/objective';

@Injectable({ providedIn: 'root' })
export class ObjectiveService {
  private objectives: Objective[] = [
    { id: 1, title: 'Learn Angular 19', description: 'Master latest Angular features', completed: false },
    { id: 2, title: 'Deploy to GitHub Pages', description: 'Host my app for free', completed: false }
  ];

  getObjectives(): Objective[] {
    return this.objectives;
  }

  addObjective(obj: Objective): void {
    this.objectives.push(obj);
  }

  toggleComplete(id: number): void {
    const obj = this.objectives.find(o => o.id === id);
    if (obj) obj.completed = !obj.completed;
  }
}
