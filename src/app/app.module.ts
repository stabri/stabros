import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { OfferservicesComponent } from './offerservices/offerservices.component';
import { TracermapComponent } from './tracermap/tracermap.component';
import { SingleofferComponent } from './offerservices/singleoffer/singleoffer.component';
import { ContactformComponent } from './contactform/contactform.component'
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    OfferservicesComponent,
    TracermapComponent,
    SingleofferComponent,
    ContactformComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
