import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EnterPageComponent} from "./enterPage/enterPage.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {VenueComponent} from "./venue/venue.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiServiceService} from "./api-service.service";
import {AgmCoreModule} from "@agm/core";
import {GeolocationService} from "./geolocation.service";
import { VenueCardComponent } from './venue-card/venue-card.component';


@NgModule({
  declarations: [
    AppComponent,
    EnterPageComponent,
    DashboardComponent,
    VenueComponent,
    BottomMenuComponent,
    TopMenuComponent,
    VenueCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAwdJD1FBcEsHDgriQfKXn_FeY1EL_4f1Q'})
  ],
  providers: [ApiServiceService,
  GeolocationService],
  bootstrap: [AppComponent, TopMenuComponent, BottomMenuComponent]
})
export class AppModule { }
