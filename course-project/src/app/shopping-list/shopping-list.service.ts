import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientAdded: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  startedEditing: Subject<number> = new Subject<number>();
  private ingredients: Ingredient[] = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10)
  ];

  constructor() {}

  getIngredientsByVal(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); // spread operator
    // no need to emit as in addIngredient() because the shopping list template
    // is not an active view at the time it is used
  }
}
