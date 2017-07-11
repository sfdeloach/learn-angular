import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  private ingredients: Ingredient[] = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10)
  ];

  constructor() {}

  getIngredientsByVal(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(ingredient);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); // spread operator
    // no need to emit as in addIngredient() because the shopping list template
    // is not an active view at the time it is used 
  }
}
