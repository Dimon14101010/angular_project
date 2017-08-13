import {Component, EventEmitter, Input, OnInit} from "@angular/core";
import {ApiServiceService} from "../api-service.service";
import {GeolocationService} from "../geolocation.service";
import {AgmMap} from "@agm/core";

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
    this.position = this.getLocation.getLocate;
    console.log('position', this.position)
    navigator.geolocation.getCurrentPosition(position2 => {position2 = position2;
    this.lat = position2.coords.latitude;
    this.lng = position2.coords.longitude;
    console.log('dashboard', position2.coords); });
    console.log ('map');
  }


}

