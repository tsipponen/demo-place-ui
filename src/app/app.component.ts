import { Component } from '@angular/core';
import { PlaceService } from './place.service'
import { Place } from './types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'places-ui';
  places: any;
  constructor(private service: PlaceService)
  {
   
  }

  ngOnInit(): void
  {
    this.service.getPlaces().subscribe(data => {
      this.places = Array.of(data)});
  }
}
