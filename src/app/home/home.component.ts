import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DayData } from '../models/day-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  today: DayData = {
    date: new Date().toISOString().split('T')[0],
    hoursSports: 0,
    hoursWork: 0,
    foodQuality: 0,
    read: false,
  };

  calculateScore(): number {
    return (
      this.today.hoursSports +
      this.today.foodQuality +
      (this.today.read ? 5 : 0)
    );
  }

  saveData(): void {
    console.log('Data saved:', this.today);
  }
}