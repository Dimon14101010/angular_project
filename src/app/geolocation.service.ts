import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable ()
export class GeolocationService {
  lat: any;
  lng: any;
  constructor (private http: HttpClient) {}
getPos () {
    navigator.geolocation.getCurrentPosition(position => {
      position = position;
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      console.log (this.lat, this.lng);
    });
  }
  getVenue () {
    this.getPos() ;
    const params = new HttpParams()
      .set ('venuePhotos', '1')
      .set ('v', '20161016')
      .set ('ll', this.lat + '-' + this.lng)
      .set ('query', 'coffee')
      .set ('client_id' , 'I5RTKGWY0YNUAUZL4JWAB22EDSEC4PQF1O4SGKOPZUHEJRS1')
      .set ('client_secret' , 'ZVD4NHQL0RD5QYKSAEO4E2X3ILJ4P2EFQCE5TPHWCGMSRNOM')
return this.http.get ('https://api.foursquare.com/v2/venues/explore', {params});
  }
}
