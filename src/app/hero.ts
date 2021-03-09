export class Hero {
  id: number;
  name: string;
  strength: number;
  constructor({ id, name, strength }: Hero) {
    this.id = id;
    this.name = name;
    this.strength = strength;
  }
}
