import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeModel, Ingredient } from './models';
import { SPAGHETTI_CARBONARA, CAPRESE_SALAD } from './mock-recipes';
import { JsonPipe } from '@angular/common';


@Component({
  imports: [RouterOutlet, JsonPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('My Recipe Box');
  protected readonly recipe = signal<RecipeModel>(CAPRESE_SALAD);
  protected readonly servings = signal<number>(1);

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

  protected readonly adjustedIngredients = computed<Ingredient[]>(() => {
    return this.recipe().ingredients.map(ingredient => ({...ingredient, quantity: ingredient.quantity * this.servings()})) 
  })
}
