import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SiteNavigationService {
  private lastVisitedRoute: string = '';

  setLastVisitedRoute(route: string): void {
    this.lastVisitedRoute = route;
  }

  getLastVisitedRoute(): string {
    return this.lastVisitedRoute || '';
  }
}
