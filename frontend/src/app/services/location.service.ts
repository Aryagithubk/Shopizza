import { Injectable } from '@angular/core';
import { LatLngLiteral } from 'leaflet';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor() {}

  getCurrentLocation(): Observable<LatLngLiteral> {
    return of();
  }
}
