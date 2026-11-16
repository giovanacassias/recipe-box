import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('My Recipe Box');

  protected login(): void {
    console.log("Login realizado com sucesso!");
  }

  protected logout(): void {
    console.log("Logout realizado com sucesso!");
  }
}
