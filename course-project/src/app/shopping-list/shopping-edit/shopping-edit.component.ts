import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  providers: []
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('ingredientForm') form: NgForm;
  subscription: Subscription;
  editMode: boolean;
  editedItemIndex: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.editMode = false;
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.form.setValue({name: 'test', amount: 7}); // Left off here!
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.shoppingListService.addIngredient(this.form.value);
    this.form.reset();
  }

  clearInputs() {
    this.form.reset();
  }
}
