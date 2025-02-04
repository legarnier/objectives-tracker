import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
];