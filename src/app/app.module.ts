import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent }
    ])
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
