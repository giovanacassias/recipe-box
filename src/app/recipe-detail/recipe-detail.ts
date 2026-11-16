import { Component, input, signal, computed } from '@angular/core';
import { Ingredient, RecipeModel } from '../models';

@Component({
  imports: [],
  selector: 'app-recipe-detail',
  styleUrl: './recipe-detail.css',
  templateUrl: './recipe-detail.html',
})

export class RecipeDetail {

  readonly recipe = input.required<RecipeModel>()

  protected readonly servings = signal<number>(1);

  protected readonly adjustedIngredients = computed<Ingredient[]>(() => {
    return this.recipe().ingredients.map((ingredient) => ({
      ...ingredient,
      quantity: ingredient.quantity * this.servings(),
    }));
  });

    protected increment(): void {
    this.servings.update((current) => current +1);
  }

  protected decrement(): void {
    this.servings.update((current) => Math.max(1, current - 1));
  }
}
