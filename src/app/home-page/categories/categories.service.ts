import { Injectable } from '@angular/core';
import { CategoriesTypes } from './categoryTypes';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories() {
    return CategoriesTypes;
  }
}
