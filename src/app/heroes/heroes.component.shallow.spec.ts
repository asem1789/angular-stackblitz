import { Component, Directive, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroComponent } from '../hero/hero.component';
import { MessageService } from '../message.service';
import { HeroesComponent } from './heroes.component';

describe('Heros component (Shallow integration tests)', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroSvc: any;
  let HEROES: Hero[];

  @Component({
    selector: 'app-hero',
    template: '<div></div>'
  })
  class FackHeroComponent {
    @Input() hero: any;
  }
  @Directive({
    selector: '[routerLink]',
  })
  class FackRouterLink {
    @Input('routerLink') linkParams : any;

  }

  beforeEach(() => {
    mockHeroSvc = jasmine.createSpyObj('HeroService', [
      'getHeroes',
      'deleteHero',
      'addHero',
    ]);

    HEROES = [
      { id: 1, name: 'Spiderman', strength: 15 },
      { id: 2, name: 'Batman', strength: 10 },
      { id: 3, name: 'Deadpool', strength: 3 },
    ]

    TestBed.configureTestingModule({
      declarations: [HeroesComponent, HeroComponent, FackRouterLink],
      providers: [{ provide: HeroService, useValue: mockHeroSvc }],
      // schemas: [NO_ERRORS_SCHEMA], // THis prevent any erro not connect with testing like problem with directive ..etc
    });

    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('should set heroes correctly from the getHeroes call', () => {
    mockHeroSvc.getHeroes.and.returnValue(of(HEROES));

    fixture.detectChanges();
    expect(fixture.componentInstance.heroes.length).toBe(3);

  });

  it('should render each hero as a heroComponent', () => {
    mockHeroSvc.getHeroes.and.returnValue(of(HEROES));

    fixture.detectChanges();

    let appHeroes = fixture.debugElement.queryAll(By.directive(HeroComponent))

    expect(appHeroes[0].componentInstance.hero.name).toEqual('Spiderman')
    expect(fixture.componentInstance.heroes.length).toBe(3);

    expect(appHeroes[0].nativeElement.querySelector('a').textContent).toContain('Spiderman');
  });

  it('should delete the hero when delete button is clicked', ()=> {
    mockHeroSvc.getHeroes.and.returnValue(of(HEROES));

    fixture.detectChanges();

    let appHeroes = fixture.debugElement.queryAll(By.directive(HeroComponent));
    let firstHeroComponent = appHeroes[0];

    // firstHeroComponent.nativeElement.querySelector('button').click();
    // expect(fixture.componentInstance.heroes.length).toBe(2);

    firstHeroComponent.componentInstance.delete.emit(undefined);

    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.directive(HeroComponent)).length).toBe(2);
  })
});
