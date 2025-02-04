import { Component } from '@angular/core';
import { ObjectiveService } from '../services/objective.service';
import { Objective } from '../models/objective';
import { NgFor } from '@angular/common'; // Import NgFor

@Component({
  selector: 'app-objectives',
  standalone: true,  // Required for standalone components
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.scss'],
  imports: [NgFor]  // Add NgFor to imports
})
export class ObjectivesComponent {
  objectives: Objective[];

  constructor(private objectiveService: ObjectiveService) {
    this.objectives = this.objectiveService.getObjectives();
  }

  toggleComplete(id: number) {
    this.objectiveService.toggleComplete(id);
  }
}
