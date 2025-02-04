import { DayData } from '../models/day-data.model';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  history: DayData[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.getDays().subscribe((data) => {
      this.history = data;
    });
  }

  calculateScore(day: DayData): number {
    return day.hoursSports + day.foodQuality + (day.read ? 5 : 0);
  }
}