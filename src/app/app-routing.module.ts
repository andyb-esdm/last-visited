import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SiteComponent } from './site/site.component';
import { ContactsComponent } from './site/contacts/contacts.component';
import { AgreementsComponent } from './site/agreements/agreements.component';
import { ParcelsComponent } from './site/parcels/parcels.component';
import { LastVisitedComponent } from './site/last-visited/last-visited.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'site/:id',
    component: SiteComponent,
    children: [
      { path: '', component: LastVisitedComponent, pathMatch: 'full' },
      { path: 'contacts', component: ContactsComponent },
      { path: 'agreements', component: AgreementsComponent },
      { path: 'parcels', component: ParcelsComponent },
      { path: 'last-visited', component: LastVisitedComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
