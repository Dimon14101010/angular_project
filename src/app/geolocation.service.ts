import {Injectable} from "@angular/core";
import {observable} from "rxjs/symbol/observable";

@Injectable ()
export class GeolocationService {
  positionId= {};
getPos () {
  navigator.geolocation.getCurrentPosition(position => {position = position;
    console.log(position);});
}
}
