import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SiteComponent } from './site/site.component';
import { ContactsComponent } from './site/contacts/contacts.component';
import { SiteAgreementsComponent } from './site/agreements/agreements.component';
import { ParcelsComponent } from './site/parcels/parcels.component';
import { AgreementComponent } from './agreement/agreement.component';
import { DetailsComponent } from './agreement/details/details.component';
import { FinancesComponent } from './finances/finances.component';
import { CompartmentComponent } from './compartment/compartment.component';
import { CompartmentDetailsComponent } from './compartment/compartment-details/compartment-details.component';
import { CompartmentLabelsComponent } from './compartment/compartment-labels/compartment-labels.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    SiteComponent,
    ContactsComponent,
    SiteAgreementsComponent,
    ParcelsComponent,
    AgreementComponent,
    DetailsComponent,
    FinancesComponent,
    CompartmentComponent,
    CompartmentDetailsComponent,
    CompartmentLabelsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
