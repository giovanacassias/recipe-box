import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeModel } from './models';
import { SPAGHETTI_CARBONARA, CAPRESE_SALAD } from './mock-recipes';


@Component({
  imports: [RouterOutlet],
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
}
