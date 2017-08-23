import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredientsByVal();
    this.subscription = this.shoppingListService.ingredientAdded.subscribe(
      (ingredients: Ingredient[]) => { this.ingredients = ingredients; }
    );
  }

  // Must unsubscribe since this is a custom made Subject()
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
      this.shoppingListService.startedEditing.next(index);
  }
}
