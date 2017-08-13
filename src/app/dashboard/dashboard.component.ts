import {Component, Input, OnInit} from "@angular/core";
import {ApiServiceService} from "../api-service.service";
import {GeolocationService} from "../geolocation.service";

@Component ({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.html'
})

export class DashboardComponent implements OnInit {
  title = 'you are here';
  venuesList = [];
  venue: any = [];
  lat: any;
  lng: any;
  comments: any;


  position: any;

  constructor (private getVenue: ApiServiceService , private getLocation: GeolocationService) {

  }
  ngOnInit () {
    this.getLocation.getPos();
    this.getLocation.getVenue()
      .subscribe(venues => {this.venue = venues;
      this.comments = this.venue.response.groups[0].items[0].tips[0].text;
      this.venuesList = this.venue.response.groups[0].items;
      console.log(this.venuesList);
      });
    navigator.geolocation.getCurrentPosition(position2 => {position2 = position2;
    this.lat = position2.coords.latitude;
    this.lng = position2.coords.longitude;
    console.log('dashboard', position2.coords); });
  }


}

