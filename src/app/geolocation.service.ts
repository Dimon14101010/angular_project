import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";


@Injectable ()
export class GeolocationService {
  coordinates: any = {};
  venueList: any;

  constructor(private http: HttpClient) {
  }
getLocate () {
    return new Promise((resolve) => {

      navigator.geolocation.getCurrentPosition(position => {
        this.coordinates = position.coords;
      console.log('coordinates', this.coordinates);
      if (this.coordinates) {resolve(this.coordinates);}});



    });
}
}
