import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() onRecipeClick: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
      new Recipe('Taco Quinoa Black Bean Stuffed Pepper', 'This exciting new recipe will amaze your family and friends! Simple fresh ingredients make this a healthy and easy to prepare dish.  The recipe easily adapts to chicken, pork, or if you are really feeling adventurous, chorizo sausage!', 'https://c1.staticflickr.com/9/8151/29397282090_9df73eae62_b.jpg'),
      new Recipe('Paella', 'Paella is a Valencian rice dish. Paella has ancient roots, but its modern form originated in the mid-19th century near the Albufera lagoon on the east coast of Spain adjacent to the city of Valencia.', 'https://static01.nyt.com/images/2013/07/17/dining/17GRILLING_SPAN/17GRILLING-superJumbo.jpg'),
      new Recipe('Salmon Roasted in Butter', "This simple fish dish is best made with wild salmon, but it works equally well with the farmed sort. It's astonishingly easy. In a hot oven, melt butter in a skillet until it sizzles, add the salmon, flip, remove the skin, then allow to roast a few minutes more.", 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg'),
  ];

  constructor() { }

  // ng-template if statement used in recipes.component.html to resolve the issue
  // of the initial recipe display
  ngOnInit() {
    // if (this.recipes) {
    //   this.onRecipeClick.emit(this.recipes[0]);
    // } else {
    //   // create an empty recipe to display on an empty array?
    // }
  }

  recipeItemClick(recipeDetail: Recipe): void {
    this.onRecipeClick.emit(recipeDetail);
  }

}
