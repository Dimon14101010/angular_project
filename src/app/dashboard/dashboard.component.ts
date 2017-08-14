import {Component, EventEmitter, Input, OnInit} from "@angular/core";
import {ApiServiceService} from "../api-service.service";
import {GeolocationService} from "../geolocation.service";
import {AgmMap} from "@agm/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component ({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.html'
})

export class DashboardComponent implements OnInit {
  title = 'you are here';
  venuesList: any = [];
  venue: any = {};
  lat: any;
  lng: any;
  comments: any;
  position: any;
  public query: string = 'coffee';
  constructor (private http: HttpClient , private getLocation: GeolocationService) {

  }
  ngOnInit () {

    this.getLocation.getLocate()
      .then(() => {
      this.position = this.getLocation.coordinates;
      console.log('position', this.position);
      })
      .then(() => {
        const params = new HttpParams()
          .set ('venuePhotos', '1')
          .set ('v', '20161016')
          .set ('ll', this.position.latitude + ',' + this.position.longitude)
          .set ('query', this.query)
          .set ('client_id' , 'I5RTKGWY0YNUAUZL4JWAB22EDSEC4PQF1O4SGKOPZUHEJRS1')
          .set ('client_secret' , 'ZVD4NHQL0RD5QYKSAEO4E2X3ILJ4P2EFQCE5TPHWCGMSRNOM')
        this.http.get
        ('https://api.foursquare.com/v2/venues/explore', {params})
          .subscribe(response => {this.venue = response;
          this.venuesList = this.venue.response.groups[0].items;
          console.log('this venue', this.venue);
          console.log('last promise', this.venuesList); });

    })
    navigator.geolocation.getCurrentPosition(position2 => {position2 = position2;
    this.lat = position2.coords.latitude;
    this.lng = position2.coords.longitude;
    console.log('dashboard', position2.coords); });
    console.log ('map');
  }
  setQuery (event: any, value: string): string {
    this.query = value;
  console.log('done query', this.query);
  return this.query;
  }
  mapEvent (event,lat,long) {
    console.log('cursor lat click', event.coords , lat, long)
  }

}

