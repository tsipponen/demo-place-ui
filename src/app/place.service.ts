import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private client:HttpClient) { }

  getPlaces()
  {
    let url = "http://localhost:8080/api/v1/places";
    return this.client.get(url).
    pipe(
      map((data: any) => {
        return data;
      }), catchError( error => {
        return throwError('Something blew up!');
      })
    );
  }
}
