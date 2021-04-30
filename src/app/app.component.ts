import { Component } from '@angular/core';

let heroCount = 2;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'La revue des 1 héros';
  titleStyle = {'font-family' : 'Arial', 'color' : 'red'};
  username = "Anonymous";
  heroes = [
    "Batman",
    "Catwoman",
    "Wonder Woman",
    "Iron Man"
  ];
  addHero(){
    this.title = 'La tour des ' + (heroCount++) + ' héros';
  }
}
