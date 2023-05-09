import { APP_INITIALIZER, NgModule, inject } from '@angular/core';
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
import { FinancesComponent } from './agreement/finances/finances.component';
import { CompartmentComponent } from './compartment/compartment.component';
import { CompartmentDetailsComponent } from './compartment/compartment-details/compartment-details.component';
import { CompartmentLabelsComponent } from './compartment/compartment-labels/compartment-labels.component';
import { OtherCompartmentStuffComponent } from './compartment/other-compartment-stuff/other-compartment-stuff.component';
import { DetailsPageNavigationService } from './services/details-page-navigation.service';

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
    OtherCompartmentStuffComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [DetailsPageNavigationService],
      useFactory: (detailsPageNavigationService: DetailsPageNavigationService) => () => null,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
