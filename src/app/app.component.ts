import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponentComponent, HomeComponentComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Router-learning';
}
