import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { OfferservicesComponent } from './offerservices/offerservices.component';
import { TracermapComponent } from './tracermap/tracermap.component';
import { SingleofferComponent } from './offerservices/singleoffer/singleoffer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    OfferservicesComponent,
    TracermapComponent,
    SingleofferComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
