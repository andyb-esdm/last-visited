import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SiteComponent } from './site/site.component';
import { ContactsComponent } from './site/contacts/contacts.component';
import { AgreementsComponent } from './site/agreements/agreements.component';
import { ParcelsComponent } from './site/parcels/parcels.component';
import { DetailsComponent } from './agreement/details/details.component';
import { FinancesComponent } from './finances/finances.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'site/:id',
    component: SiteComponent,
    children: [
      { path: '', redirectTo: 'last-visited', pathMatch: 'full' },
      { path: 'contacts', component: ContactsComponent },
      { path: 'agreements', component: AgreementsComponent },
      { path: 'parcels', component: ParcelsComponent },
    ],
  },
  {
    path: 'agreement/:id',
    component: AgreementsComponent,
    children: [
      { path: '', redirectTo: 'last-visited', pathMatch: 'full' },
      { path: 'details', component: DetailsComponent },
      { path: 'finances', component: FinancesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
