import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SiteComponent } from './site/site.component';
import { ContactsComponent } from './site/contacts/contacts.component';
import { SiteAgreementsComponent } from './site/agreements/agreements.component';
import { ParcelsComponent } from './site/parcels/parcels.component';
import { DetailsComponent } from './agreement/details/details.component';
import { FinancesComponent } from './agreement/finances/finances.component';
import { AgreementComponent } from './agreement/agreement.component';
import { CompartmentComponent } from './compartment/compartment.component';
import { CompartmentDetailsComponent } from './compartment/compartment-details/compartment-details.component';
import { CompartmentLabelsComponent } from './compartment/compartment-labels/compartment-labels.component';
import { OtherCompartmentStuffComponent } from './compartment/other-compartment-stuff/other-compartment-stuff.component';

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
      { path: 'agreements', component: SiteAgreementsComponent },
      { path: 'parcels', component: ParcelsComponent },
    ],
  },
  {
    path: 'agreement/:id',
    component: AgreementComponent,
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: 'details', component: DetailsComponent },
      { path: 'finances', component: FinancesComponent },
    ],
  },
  {
    path: 'compartment/:id',
    component: CompartmentComponent,
    children: [
      { path: 'details', component: CompartmentDetailsComponent },
      { path: 'labels', component: CompartmentLabelsComponent },
      { path: 'other-stuff', component: OtherCompartmentStuffComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
