import {Component, Input, OnInit} from "@angular/core";
import {ApiServiceService} from "../api-service.service";
import {GeolocationService} from "../geolocation.service";

@Component ({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.html'
})

export class DashboardComponent implements OnInit {
  title = 'you are here';
  location = {};
  venue: any = [];
  lat: any;
  lng: any;
  comments: any;


  constructor (private getVenue: ApiServiceService , private getLocation: GeolocationService) {
  }
  ngOnInit () {
    this.getVenue.venueList()
      .subscribe(venues => {this.venue = venues;
      this.comments = this.venue.response.groups[0].items[0].tips[0].text;
      });
    this.getLocation.location
      .subscribe(coords => {this.lat = coords.latitude;
                            this.lng = coords.longitude;});
  }


}
