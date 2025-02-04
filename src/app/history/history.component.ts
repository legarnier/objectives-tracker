import { Component } from '@angular/core';
import { DayData } from '../models/day-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  history: DayData[] = [
    // Example data
    {
      date: '2023-10-01',
      hoursSports: 2,
      hoursWork: 8,
      foodQuality: 15,
      read: true,
    },
  ];

  calculateScore(day: DayData): number {
    return day.hoursSports + day.foodQuality + (day.read ? 5 : 0);
  }
}