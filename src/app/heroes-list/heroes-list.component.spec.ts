import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesListComponent } from './heroes-list.component';

import Hero from '../types/hero.type';

heroes: Hero[] = [
  { id : 1, name : 'Batman' },
  { id : 2, name : 'Superman' },
  { id : 3, name : 'Spiderman' },
  ];

describe('HeroesListComponent', () => {
  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
