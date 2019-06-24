export class Hero {
  constructor(
    public name: string,
    public description: string,
    public id?: string
  ) {
    this.id = `Hero${this.name}`;
  }
}

export class Villain {
  constructor(
    public name: string,
    public description: string,
    public id?: string
  ) {
    this.id = `Villain${this.name}`;
  }
}
