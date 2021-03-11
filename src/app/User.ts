export class User {
  public UserId: string;
  public Name: string;
  public Pokemon: string;
  public Color: string;

  constructor(id: string, name: string, pokemon: string, color: string) {
    this.Name = name;
    this.UserId = id;
    this.Color = color;
    this.Pokemon = pokemon;
  }
}
