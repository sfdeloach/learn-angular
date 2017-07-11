import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  providers: []
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  btnClick(action: string): void {
    if (action === "add") {
      this.shoppingListService.addIngredient(new Ingredient
        (this.name.nativeElement.value, this.amount.nativeElement.value)
      );
      this.clearInputs();
    }
  }

  clearInputs() {
    this.name.nativeElement.value = "";
    this.amount.nativeElement.value = "";
  }
}
