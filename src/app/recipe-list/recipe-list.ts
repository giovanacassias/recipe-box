import { Component, computed, signal } from '@angular/core';
import { RecipeModel, Ingredient } from '../models';
import { SPAGHETTI_CARBONARA, CAPRESE_SALAD } from '../mock-recipes';
import { JsonPipe } from '@angular/common';


@Component({
  imports: [JsonPipe],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.css',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  protected readonly recipe = signal<RecipeModel>(CAPRESE_SALAD);
  protected readonly servings = signal<number>(1);

    protected readonly adjustedIngredients = computed<Ingredient[]>(() => {
    return this.recipe().ingredients.map(ingredient => ({...ingredient, quantity: ingredient.quantity * this.servings()})) 
  })

    protected capreseSalad(): void {
    this.recipe.set(CAPRESE_SALAD);
  }

  protected spaghettiCarbonara(): void {
    this.recipe.set(SPAGHETTI_CARBONARA);
  }

  protected increment(): void {
    this.servings.update((current) => current +1);
  }

  protected decrement(): void {
    this.servings.update((current) => Math.max(1, current - 1));
  }
}
