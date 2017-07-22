import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipesByValue();
  }

  // this simple navigation could have easily been accomplished in the view,
  // it is here for demonstration purposes only, do not design this way!
  onNewClick() {
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }
}
