import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiServiceService {

  constructor(private http: HttpClient) {
  }
  venueList () {
    return this.http.get
    ('https://api.foursquare.com/v2/venues/explore?' +
      'v=20161016&ll=41.878114%2C%20-87.629798&query=coffee&intent=checkin&' +
      'client_id=I5RTKGWY0YNUAUZL4JWAB22EDSEC4PQF1O4SGKOPZUHEJRS1&' +
      'client_secret=ZVD4NHQL0RD5QYKSAEO4E2X3ILJ4P2EFQCE5TPHWCGMSRNOM');
  }

}
