import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme: string

  constructor() {
    this.theme = localStorage.getItem('theme') || 'light'
    document.body.classList.value = this.theme
  }

  nextTheme() {
    const next = {
      dark: 'light',
      light: 'solar',
      solar: 'dark'
    }[this.theme] || '';
    localStorage.setItem('theme', next);
    document.body.classList.replace(this.theme, next);
    this.theme = next;
  }
}