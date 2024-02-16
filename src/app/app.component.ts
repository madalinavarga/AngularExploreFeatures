import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FavoritesComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-learn';
}
