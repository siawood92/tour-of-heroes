import { Component } from '@angular/core';

let heroCount = 2;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'La Revue des héros';
  // titleStyle = { 'font-family': 'Arial', 'color': 'red' };
  username = 'Anonymous';
  heroes = [
    'Batman',
    'Superman',
    'Wonderwoman',
    'Ironman'
  ];
  evils = [
    'Joker',
    'Luthor',
    'WonderTrump',
    'Waterman'
  ]
  heroToAdd = '';
  heroToRemove = '';
  vilainToAdd = '';
  vilainToRemove = '';
  addHero() {
    this.heroes.push(this.heroToAdd);
    // this.title = 'La Revue des ' + this.heroes.length + ' héros.';
  }
  removeHero(heroToRemove: string) {
    this.heroes.forEach((value, index) => {
      if (value == heroToRemove) this.heroes.splice(index, 1);
    });
  }
  manageHero(heroToManage: string) {
    this.heroes.forEach((value, index) => {
      if (value == heroToManage) this.heroes.splice(index, 1);
      else this.heroes.push(heroToManage)
    });
  }
  manageCharacter(characterToManage: string, table) {
    if (table.indexOf(characterToManage) !== -1) {
      table.forEach((value, index) => {
        if (value == characterToManage) table.splice(index, 1);
      });
    } else table.push(characterToManage)
  }
}

