import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SiteNavigationService {
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const url = (event as NavigationEnd).url;
        if (url.length > 0 && url.toLowerCase().startsWith('/site/')) {
          const childUrls = url.split('/');
          if (childUrls[3] && childUrls[3] !== 'last-visited') {
            this.setLastVisitedRoute(childUrls[3]);
          } else {
            const lastVisitedRoute = this.getLastVisitedRoute();
            if (lastVisitedRoute) {
              this.router.navigate([url, lastVisitedRoute], {
                skipLocationChange: true,
              });
            } else {
              // Navigate to the default route (contacts) if no last visited route is found.
              this.router.navigate([url, 'contacts'], {
                skipLocationChange: true,
              });
            }
          }
        }
      });
  }

  private lastVisitedRoute: string = '';

  setLastVisitedRoute(route: string): void {
    this.lastVisitedRoute = route;
  }

  getLastVisitedRoute(): string {
    return this.lastVisitedRoute || '';
  }
}
