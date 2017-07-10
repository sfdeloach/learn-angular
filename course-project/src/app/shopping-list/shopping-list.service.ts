import { Injectable } from '@angular/core';

import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class ShoppingListService {

  constructor(private recipeService: RecipeService) {}

}
