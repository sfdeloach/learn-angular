import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  selectedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
      new Recipe('Taco Quinoa Black Bean Stuffed Pepper', 'This exciting new recipe will amaze your family and friends! Simple fresh ingredients make this a healthy and easy to prepare dish.  The recipe easily adapts to chicken, pork, or if you are really feeling adventurous, chorizo sausage!', 'https://c1.staticflickr.com/9/8151/29397282090_9df73eae62_b.jpg', [new Ingredient("Bell Pepper", 2), new Ingredient("Chorizo Sausage", 2)]),
      new Recipe('Paella', 'Paella is a Valencian rice dish. Paella has ancient roots, but its modern form originated in the mid-19th century near the Albufera lagoon on the east coast of Spain adjacent to the city of Valencia.', 'https://static01.nyt.com/images/2013/07/17/dining/17GRILLING_SPAN/17GRILLING-superJumbo.jpg', [new Ingredient("Rice", 4), new Ingredient("Shrimp", 12)]),
      new Recipe('Salmon Roasted in Butter', "This simple fish dish is best made with wild salmon, but it works equally well with the farmed sort. It's astonishingly easy. In a hot oven, melt butter in a skillet until it sizzles, add the salmon, flip, remove the skin, then allow to roast a few minutes more.", 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg', [new Ingredient("Salmon", 2), new Ingredient("Sweet Cream Butter", 6)]),
  ];

  getRecipesByValue(): Recipe[] {
    // returns a copy, not a reference
    return this.recipes.slice();
  }

  getRecipeByName(name: string): Recipe {
    return this.recipes.find(
      (recipe: Recipe): boolean => {
        return recipe.name === name;
      }
    );
  }
}
