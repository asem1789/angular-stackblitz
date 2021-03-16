/*
  #Note, about name file: you can put intectated or shallow
*/
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeroComponent } from './hero.component'


describe('Hero component (Shallow integration tests)' , ()=> {
  let fixture : ComponentFixture<HeroComponent>

  beforeEach(()=> {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA], // THis prevent any erro not connect with testing like problem with directive ..etc
    })

    fixture = TestBed.createComponent(HeroComponent);    
  })

  it('should have the correct hero', ()=> {
    fixture.componentInstance.hero = {
      id: 1, name: 'Spiderman', strength: 15
    }

    expect(fixture.componentInstance.hero.name).toBe('Spiderman');
  })

  it('should display the hero id inside an span tag', ()=> {
    fixture.componentInstance.hero = {
      id: 1, name: 'Spiderman', strength: 15
    }

    fixture.detectChanges();

    let anchorText = fixture.nativeElement.querySelector('span').textContent;

    expect(anchorText).toContain('1');
  })

  it('should display the hero name inside an a tag', ()=> {
    fixture.componentInstance.hero = {
      id: 1, name: 'Spiderman', strength: 15
    }

    fixture.detectChanges();

    let anchorText = fixture.nativeElement.querySelector('a').textContent;

    expect(anchorText).toContain('Spiderman');
  })



})