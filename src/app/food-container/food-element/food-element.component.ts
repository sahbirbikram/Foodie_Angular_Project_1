import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-element',
  templateUrl: './food-element.component.html',
  styleUrls: ['./food-element.component.scss']
})
export class FoodElementComponent implements OnInit {

  @Input('food') food: { title: string,src: string, Description: string, time: string, serves: string, price: string };

  constructor() { }

  ngOnInit(): void {
  }

}
