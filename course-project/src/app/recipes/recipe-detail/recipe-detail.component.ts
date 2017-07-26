import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipeByName(params.name);
      }
    );
  }

  onToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  // unnecessarily complex navigation just for demonstration
  onEditClick() {
    this.router.navigate(['../', this.recipe.name, 'edit'], {relativeTo: this.activatedRoute});
  }
}
