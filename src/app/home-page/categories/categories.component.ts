import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input('categoryElement') category: {title: string, src: string};
  @Input('origin') isHomePage: boolean;

  @Output('foodType') foodTypeSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectFoodType() {
    this.foodTypeSelected.emit(this.category.title);
  }

}
