import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" routerLink="/">Objectives Tracker</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" routerLink="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/history">History</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}