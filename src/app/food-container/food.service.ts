import { Injectable } from '@angular/core';
import { BreakfastTypes } from './breakfastTypes';
import { LunchTypes } from './lunchTypes';
import { DinnerTypes } from './dinnerTypes';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getSelectedFoods(selectedFoodType: string) {
    if(selectedFoodType === 'Breakfast') {
      return BreakfastTypes;
    } else if (selectedFoodType === 'Lunch') {
      return LunchTypes;
    } else if (selectedFoodType === 'Dinner') {
      return DinnerTypes;
    }
  }
}
