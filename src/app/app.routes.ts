import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObjectivesComponent } from './objectives/objectives.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'objectives', component: ObjectivesComponent },
  { path: '**', redirectTo: '' }  // Wildcard route
];
