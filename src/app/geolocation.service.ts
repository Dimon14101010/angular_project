import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable ()
export class GeolocationService {
  lat: number;
  lng: number;
  constructor () {}
public getPos () {
  navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      console.log ('succes', this.lat, this.lng);
    }, position => {position = position;
  console.log ('error')});
  }
}

