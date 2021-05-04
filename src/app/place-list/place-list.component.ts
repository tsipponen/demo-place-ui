import { Component, Input, OnInit } from '@angular/core';
import { Data, OpeningHours } from '../types'

@Component({
  selector: 'place-list',
  styleUrls: ['place-list.component.css'],
  templateUrl: 'place-list.component.html',
})
export class PlaceListComponent {
 @Input() dataList!: Data[];
 date!: Date;
 p: number = 1;

 constructor(){
   this.date = new Date();
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