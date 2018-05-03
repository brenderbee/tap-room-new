export class Keg {
  public empty: boolean = false;
  public pints: number = 124;
  constructor(public name: string, public brewery: string, public abv: string) {}
}
