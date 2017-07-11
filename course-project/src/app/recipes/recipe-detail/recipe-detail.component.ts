import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  onToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);

    /*  This was my original solution, where I tried to by DRY by using an already
     *  existing method to add each ingredient, one at a time. The problem is the
     *  already existing method would emit an event after each push, which for larger
     *  arrays would be inefficient.
     */
    // this.recipe.ingredients.forEach(
    //   (ingredient: Ingredient) => {
    //     this.shoppingListService.addIngredient(ingredient);
    //   }
    // );
  }
}
