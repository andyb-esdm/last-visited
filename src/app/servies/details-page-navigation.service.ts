import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

/**
 * Navigates to the default child route of a details page, if no child route
 * is specified in the url. Sets the default child route if one is specified so
 * that the app stores the last child route visited.
 */
@Injectable({
  providedIn: 'root'
})
export class DetailsPageNavigationService {
  private defaultChildRoutes = new Map<string, string>([
    ['site', 'parcels'],
    ['compartment', 'labels'],
    ['agreement', 'finances']
  ]);

  /**
   * Subscribes to Router NavigationEnd event and checks the url against 
   * the parent urls in the defaultChildRoutes map. If child url is not 
   * specified, navigates to default child route/last child route
   * visited. Else, update the defaultChildRoutes map to store last child 
   * route visited.
   * @param router Angular Router
   */
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const url = (event as NavigationEnd).url;
        if (url.length > 0) {
          const urlSegments = url.split('/');
          const parentUrl = urlSegments[1];
          const childUrl = urlSegments[3];
          if (this.defaultChildRoutes.has(parentUrl)) {
            if (childUrl === '' || childUrl === undefined) {
              this.router.navigate([url, this.defaultChildRoutes.get(parentUrl)], {
                replaceUrl: true,
              });
            } else {
              this.defaultChildRoutes.set(parentUrl, childUrl)
            }
          }
        }
      });
  }
}
