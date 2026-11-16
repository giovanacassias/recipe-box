import { Component, computed, signal } from '@angular/core';
import { RecipeModel, Ingredient } from '../models';
import { SPAGHETTI_CARBONARA, CAPRESE_SALAD } from '../mock-recipes';
import { RecipeDetail } from '../recipe-detail/recipe-detail';

@Component({
  imports: [RecipeDetail],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.css',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  protected readonly title = signal('My Recipe Box');

  protected readonly recipe = signal<RecipeModel>(CAPRESE_SALAD);

  protected capreseSalad(): void {
    this.recipe.set(CAPRESE_SALAD);
  }

  protected spaghettiCarbonara(): void {
    this.recipe.set(SPAGHETTI_CARBONARA);
  }
}
