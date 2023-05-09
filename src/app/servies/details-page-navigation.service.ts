import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsPageNavigationService {
  private defaultChildRoutes = new Map<string, string>([
    ['site', 'parcels'],
    ['compartment', 'labels'],
    ['agreement', 'finances']
  ]);

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const url = (event as NavigationEnd).url;
        if (url.length > 0) {
          const urlSegments = url.split('/');
          console.log(urlSegments)
          const parentUrl = urlSegments[1];
          const childUrl = urlSegments[3];
          console.log(parentUrl, childUrl)
          if (this.defaultChildRoutes.has(parentUrl)) {
            console.log(parentUrl)
            if (childUrl === '' || childUrl === undefined) {
              this.router.navigate([url, this.defaultChildRoutes.get(parentUrl)], {
                replaceUrl: true,
              });
            } else {
              this.defaultChildRoutes.set(parentUrl, childUrl)
            }
          }
          console.log(this.defaultChildRoutes);
        }
      });
  }
}
