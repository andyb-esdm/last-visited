import { Component } from '@angular/core';
import { DetailsPageNavigationService } from './servies/details-page-navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'last-visited';

  // constructor(
  //   private detailsPageNavigationService: DetailsPageNavigationService
  // ) { }
}
