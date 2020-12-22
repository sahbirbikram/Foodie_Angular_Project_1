import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from './categories/categories.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isHomePage: boolean = true;
  categoryElements = [];


  constructor( private router: Router, private categoryService: CategoriesService) { 
    this.categoryElements = this.categoryService.getCategories();
  }

  ngOnInit(): void {
  }

  navigate(element) {
    this.router.navigate(['FoodContainer'], {
    state: { activeStatus: element.title },
    skipLocationChange: true
    });
  }

}
