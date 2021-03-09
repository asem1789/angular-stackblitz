import { HeroesComponent } from './heroes.component';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';

describe('Heroes Component', ()=> {

  let HEROES : Hero[] = [
    {id: 1, name: 'Spiderman', strength: 15},
    {id: 2, name: 'Batman', strength: 10},
    {id: 3, name: 'Deadpool', strength: 3},
  ];

 
  let mockHeroSvc ;
  let heroesCmp: HeroesComponent

  beforeEach(()=> {

    mockHeroSvc = jasmine.createSpyObj('HeroService', ['deleteHero']);
    mockHeroSvc.deleteHero.and.returnValue(of(true));

    heroesCmp = new HeroesComponent(mockHeroSvc);

  })

  it('should remove the selected hero from the heros list', ()=> {
    // arrang    
    heroesCmp.heroes = HEROES;

    // act
    heroesCmp.delete(HEROES[1]);

    // assert
    expect(heroesCmp.heroes.length).toBe(2);
    expect(heroesCmp.heroes[0]).toBe(HEROES[0]);
    expect(heroesCmp.heroes[1]).toBe(HEROES[2]);
  })


})