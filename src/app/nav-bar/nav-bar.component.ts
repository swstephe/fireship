import { Component } from '@angular/core';
import {ThemeService} from "../theme.service";

@Component({
  selector: 'app-nav-bar',
  providers: [ThemeService],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private themeService: ThemeService) {}

  nextTheme() {
    this.themeService.nextTheme()
  }
}
