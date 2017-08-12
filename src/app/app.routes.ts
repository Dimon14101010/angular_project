import {Routes} from "@angular/router";
import {EnterPageComponent} from "./enterPage/enterPage.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {VenueComponent} from "./venue/venue.component";

export const routes: Routes = [
  {path: '', component: EnterPageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'venue/:id', component: VenueComponent}

]
