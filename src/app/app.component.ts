import { Component, OnInit } from '@angular/core';
import { PlaceService } from './place.service'
import { Data } from './types'
import { PlaceListComponent } from './place-list/place-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'places-ui';
  places!: Data[];
  list!: PlaceListComponent;

  constructor(private service: PlaceService)
  {
  }

  ngOnInit(): void
  {
    this.service.getPlaces().subscribe(data => {
      this.places = data.data
    });
  }

 
}