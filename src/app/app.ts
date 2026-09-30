import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GulaComponent } from './gula/gula.component';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('doga_pelda');
  isMenuCollapsed = true;
  isDropdownOpen = false;
}
