import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../home-page/categories/categories.service';
import { FoodService } from './food.service';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss']
})
export class FoodContainerComponent implements OnInit {

  isHomePage: boolean = false;
  selectedFoodType: string;
  name: string = 'Breakfast';

  categoryElements = [];

  foods: any = this.foodService.getSelectedFoods('Breakfast');


  constructor( private router: Router, private foodService: FoodService, private categoryService: CategoriesService ) {
    this.categoryElements = this.categoryService.getCategories();
    this.name = this.router.getCurrentNavigation().extras.state.activeStatus;
    this.foods = this.foodService.getSelectedFoods(this.name);
    
  }

  ngOnInit(): void {
  }

  onFoodTypeSelected(event) {
    this.selectedFoodType = event;
    this.foods = this.foodService.getSelectedFoods(event);
    }

}
