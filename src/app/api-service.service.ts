import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class ApiServiceService {
  positoinLng: any;
  positoinLat: any;
  constructor(private http: HttpClient) {
  }
  geoPosition () {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {position = position;
        this.positoinLng = position.coords.longitude;
        this.positoinLat = position.coords.latitude; });
    }
  }
  venueList () {
    const params = new HttpParams()
      .set ('venuePhotos', '1')
      .set ('v', '20161016')
      .set ('ll', this.positoinLat + '-' + this.positoinLng)
      .set ('query', 'coffee')
      .set ('client_id' , 'I5RTKGWY0YNUAUZL4JWAB22EDSEC4PQF1O4SGKOPZUHEJRS1')
      .set ('client_secret' , 'ZVD4NHQL0RD5QYKSAEO4E2X3ILJ4P2EFQCE5TPHWCGMSRNOM')
    return this.http.get
    ('https://api.foursquare.com/v2/venues/explore', {params});
  }

}
