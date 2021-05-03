import { Component } from '@angular/core';
import { PlaceService } from './place.service'
import { Data, OpeningHours } from './types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'places-ui';
  places!: Data[];
  date!: Date;
  constructor(private service: PlaceService)
  {
   
  }

  ngOnInit(): void
  {
    this.service.getPlaces().subscribe(data => {
      this.places = data.data;
      this.date = new Date();
      this.date.setHours(17);
    });
  }

  isPlaceOpen(opening_hours: OpeningHours, date: Date): boolean
  {
    if(opening_hours.hours === null)
    {
      return false;
    }
    let dayNumber = date.getDay();
    if(dayNumber === 0)
    {
      dayNumber = 7;
    }

    if(opening_hours.hours[dayNumber].open24h)
    {
      return true;
    }
    else
    {
      let dateHours = date.getHours();
      return (dateHours > parseInt(opening_hours.hours[dayNumber].opens) 
      && dateHours < parseInt(opening_hours.hours[dayNumber].closes) 
      ? true : false)
    }
  }
}