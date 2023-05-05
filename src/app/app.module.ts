import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SiteComponent } from './site/site.component';
import { ContactsComponent } from './site/contacts/contacts.component';
import { AgreementsComponent } from './site/agreements/agreements.component';
import { ParcelsComponent } from './site/parcels/parcels.component';
import { AgreementComponent } from './agreement/agreement.component';
import { DetailsComponent } from './agreement/details/details.component';
import { FinancesComponent } from './finances/finances.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    SiteComponent,
    ContactsComponent,
    AgreementsComponent,
    ParcelsComponent,
    AgreementComponent,
    DetailsComponent,
    FinancesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
