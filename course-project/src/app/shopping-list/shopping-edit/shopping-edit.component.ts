import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  @Output() addIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) {}

  btnClick(action: string): void {
    if (action === "add") {
      this.shoppingListService.addIngredient(
        new Ingredient (
          this.name.nativeElement.value,
          this.amount.nativeElement.value
        )
      );
      // this.addIngredient.emit(new Ingredient (
      //   this.name.nativeElement.value,
      //   this.amount.nativeElement.value
      // ));
      this.clearInputs();
    }
  }

  clearInputs() {
    this.name.nativeElement.value = "";
    this.amount.nativeElement.value = "";
  }
}
