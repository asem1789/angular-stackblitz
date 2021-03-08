import { StrengthPipe } from './strength.pipe';


describe('Strength Pipe', ()=> {

  it('Should display weak if strength is 5', ()=> {
    let pipe = new StrengthPipe(); // arrange

    let result = pipe.transform(5); // act

    expect(result).toBe('5 (weak)'); // assert
    
    // maybe make it short
    // expect(pipe.transform(5)).toBe('5 (weak)'); // assert
  })

  it('Should display strong if strength is 15', ()=> {
    let pipe = new StrengthPipe(); // arrange

    let result = pipe.transform(15); // act

    expect(result).toBe('15 (strong)'); // assert
  })
})