import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompartmentNavigationService {
  private defaultChildRoute = 'details';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const url = (event as NavigationEnd).url;
        if (url.length > 0 && url.toLowerCase().startsWith('/compartment/')) {
          const childUrl = url.split('/')[3];
          if (childUrl === '' || childUrl === undefined) {
            this.router.navigate([url, this.defaultChildRoute], {
              replaceUrl: true,
            });
          } else {
            this.defaultChildRoute = childUrl;
          }
        }
      });
  }
}
