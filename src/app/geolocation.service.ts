import {Injectable} from "@angular/core";

@Injectable ()
export class GeolocationService {
  location: any;
  getPosition () {
  if (navigator.geolocation) {
  return navigator.geolocation.getCurrentPosition(position => this.location = position.coords);
}
}
}
