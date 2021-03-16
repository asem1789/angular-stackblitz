import { HeroesComponent } from './heroes.component';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';

describe('Heroes Component', () => {
  let HEROES: Hero[] ;

  let mockHeroSvc: any;
  let heroesCmp: HeroesComponent;

  beforeEach(() => {  
    /*
      #important: we have to intialize here not above to avoid problems
    */
    HEROES = [
      { id: 1, name: 'Spiderman', strength: 15 },
      { id: 2, name: 'Batman', strength: 10 },
      { id: 3, name: 'Deadpool', strength: 3 },
    ]

    mockHeroSvc = jasmine.createSpyObj('HeroService', ['deleteHero', 'sort', 'addHero']);
    mockHeroSvc.deleteHero.and.returnValue(of(true));

    heroesCmp = new HeroesComponent(mockHeroSvc);
  });

  it('should call addHero with the right values', ()=> {
    heroesCmp.heroes = HEROES;
    //act 
    mockHeroSvc.addHero.and.returnValue(of(true));    
    heroesCmp.add('Wonder Women ');
    
    expect(mockHeroSvc.addHero).toHaveBeenCalledWith({ name: 'Wonder Women', strength: 11 });
  })

  it('should add the correct hero to the HEROES list', ()=> {
    heroesCmp.heroes = HEROES;
    //act 
    let createdHero = {id: 4,name: 'Wonder Women', strength: 11 }
    mockHeroSvc.addHero.and.returnValue(of(createdHero));    
    heroesCmp.add('Wonder Women ');
    
    expect(heroesCmp.heroes[3]).toBe(createdHero); 
  })

  it('should remove the selected hero from the heros list', () => {
    // arrang
    heroesCmp.heroes = HEROES;

    // act
    heroesCmp.delete(HEROES[1]);

    // assert
    expect(heroesCmp.heroes.length).toBe(2);
    expect(heroesCmp.heroes[0]).toBe(HEROES[0]);
    expect(heroesCmp.heroes[1]).toBe(HEROES[2]);
  });

  it('should call deleteHereo with the correct hero', () => {
    heroesCmp.heroes = HEROES;

    heroesCmp.delete(HEROES[1]);

    expect(mockHeroSvc.deleteHero).toHaveBeenCalledWith(HEROES[1]);
  }); 

});
