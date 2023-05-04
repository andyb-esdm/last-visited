import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteNavigationService } from 'src/app/services/site-navigation.service';

@Component({
  selector: 'app-last-visited',
  templateUrl: './last-visited.component.html',
  styleUrls: ['./last-visited.component.css'],
})
export class LastVisitedComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private siteNavigationService: SiteNavigationService
  ) {}

  ngOnInit() {
    const lastVisitedRoute = this.siteNavigationService.getLastVisitedRoute();
    if (lastVisitedRoute) {
      this.router.navigate([lastVisitedRoute], {
        relativeTo: this.route.parent,
        skipLocationChange: true,
      });
    } else {
      // Navigate to the default route (contacts) if no last visited route is found.
      this.router.navigate(['contacts'], {
        relativeTo: this.route.parent,
        skipLocationChange: true,
      });
    }
  }
}
