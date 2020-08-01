import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './components/location/location.component';
import { BannerComponent } from './components/banner/banner.component';
import { TopPicksComponent } from './components/top-picks/top-picks.component';
import { OffersComponent } from './components/offers/offers.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { SpotlightComponent } from './components/spotlight/spotlight.component';
import { PopularComponent } from './components/popular/popular.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    BannerComponent,
    TopPicksComponent,
    OffersComponent,
    CouponsComponent,
    SpotlightComponent,
    PopularComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
