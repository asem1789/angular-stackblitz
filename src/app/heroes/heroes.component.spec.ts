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

  // let mockHeroSvc : HeroService;
  // let heroesCmp: HeroesComponent;
  /*
    * work with above his test is work
    * in the last lesson became as below
    * No way pass with me
  */

  let mockHeroSvc ;
  let heroesCmp ;

  beforeEach(()=> {
    // #question how to fix this error
    // mockHeroSvc = {
    //   deleteHero: function() {
    //     return { subscribe: function() {}}
    //   }
    // };

    mockHeroSvc = jasmine.createSpyObj<HeroService>(['deleteHero']);
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

  it('should call delelteHero with the correct hero', ()=> {
    heroesCmp.heroes = HEROES;
    mockHeroSvc.deleteHero.and.returnValue(of(true));

    heroesCmp.delete(HEROES[1]);

    expect(mockHeroSvc.deleteHero).toHaveBeenCalledWith(HEROES[1])
  })

})