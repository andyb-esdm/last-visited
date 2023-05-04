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
import { LastVisitedComponent } from './site/last-visited/last-visited.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    SiteComponent,
    ContactsComponent,
    AgreementsComponent,
    ParcelsComponent,
    LastVisitedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
