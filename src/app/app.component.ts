import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar />

      <router-outlet />
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Learn Angular 2025';
}
