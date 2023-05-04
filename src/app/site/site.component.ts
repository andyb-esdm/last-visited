import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SiteNavigationService } from '../services/site-navigation.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css'],
})
export class SiteComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private siteNavigationService: SiteNavigationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription.add(this.subscribeToRouterEvents());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscribeToRouterEvents(): Subscription {
    return this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const url = (event as NavigationEnd).url;
        if (url.length > 0 && url.toLowerCase().startsWith('/site/')) {
          const childUrls = url.split('/');
          if (childUrls[3] && childUrls[3] !== 'last-visited') {
            this.siteNavigationService.setLastVisitedRoute(childUrls[3]);
          }
        }
      });
  }
}
