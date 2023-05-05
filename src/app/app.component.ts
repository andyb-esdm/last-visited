import { Component } from '@angular/core';
import { CompartmentNavigationService } from './services/compartment-navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'last-visited';

  constructor(
    private compartmentNavigationService: CompartmentNavigationService
  ) {}
}
