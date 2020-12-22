import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CategoriesComponent } from './home-page/categories/categories.component';
import { FoodContainerComponent } from './food-container/food-container.component';
import { FoodElementComponent } from './food-container/food-element/food-element.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: '', component: HomePageComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'FoodContainer', component: FoodContainerComponent },
  { path: 'foodElement', component: FoodElementComponent },

  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
